"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EnquiryModal({ trigger }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Close modal after 1 sec
        setTimeout(() => setIsOpen(false), 1000);
      } else {
        toast.error(`❌ Failed to send message: ${data.error || "Try again."}`);
      }
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-xl shadow-xl border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-[#1c1c57] text-2xl font-bold text-center">
              Contact Us
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-center">
              Submit your enquiry and we’ll get back to you soon.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="font-medium">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="focus-visible:ring-[#1c1c57] rounded-lg shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="focus-visible:ring-[#1c1c57] rounded-lg shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="font-medium">Phone</Label>
              <Input
                id="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="focus-visible:ring-[#1c1c57] rounded-lg shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="font-medium">Message</Label>
              <Input
                id="message"
                placeholder="What do you need?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="focus-visible:ring-[#1c1c57] rounded-lg shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#1c1c57] hover:bg-[#2f2f5f] text-white w-full py-2 rounded-lg shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Toast Container */}
      {typeof window !== "undefined" &&
        toast &&
        toast.TYPE !== undefined && (
          <div>
            {require("react-toastify").toast &&
              require("react-toastify").ToastContainer &&
              require("react-toastify").ToastContainer()}
          </div>
        )}
    </>
  );
}
