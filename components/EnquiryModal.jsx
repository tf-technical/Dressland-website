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
    city: "",
    company: "",
    gst: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("");

  // All products from your sections
  const products = [
    // Corporate Uniforms
    "Blazers",
    "Shirts",
    "Trousers",
    "Polo T-Shirts",
    "Jeans",
    // Industrial Safety
    "F.R. Suit",
    "Aluminised Fire Proximity Suit",
    "Helmets",
    "Safety Shoes",
    "Safety Eyewear",
    "Safety Jacket",
    // Sustainables
    "T-Shirts",
    "Organic Cotton T-Shirts",
    "Sweatshirts",
    "Mens Polo T-shirt",
    "Mens Round Neck T-shirt",
    "Hoodies",
    // Sportswear
    "Dryfit T-Shirts",
    "Sweatshirts (Sportswear)",
    "Jackets",
    "Track Pants",
    "Caps",
  ];

  // ✅ Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (selectedProducts.length === 0) {
      newErrors.products = "Please select at least one product.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("❌ Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const submissionData = {
        ...formData,
        products: selectedProducts,
      };

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          company: "",
          gst: "",
          message: "",
        });
        setSelectedProducts([]);
        setCurrentProduct("");
        setErrors({});

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

  const handleAddProduct = () => {
    if (currentProduct) {
      setSelectedProducts([
        ...selectedProducts,
        { name: currentProduct, quantity: 1 },
      ]);
      setCurrentProduct("");
      setErrors({ ...errors, products: "" });
    }
  };

  const handleRemoveProduct = (index) => {
    const updated = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(updated);
  };

  const handleQuantityChange = (index, quantity) => {
    const updated = [...selectedProducts];
    updated[index].quantity = Math.max(1, parseInt(quantity) || 1);
    setSelectedProducts(updated);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-[#1c1c57] text-2xl font-bold text-center">
              Contact Us
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-center">
              Submit your enquiry and we'll get back to you soon.
            </DialogDescription>
          </DialogHeader>

          {/* Two column grid layout */}
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="name" className="font-medium text-sm">
                  Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`focus-visible:ring-[#1c1c57] rounded-md shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all text-sm py-1 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="email" className="font-medium text-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`focus-visible:ring-[#1c1c57] rounded-md shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all text-sm py-1 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="phone" className="font-medium text-sm">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`focus-visible:ring-[#1c1c57] rounded-md shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all text-sm py-1 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>

              {/* City */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="city" className="font-medium text-sm">
                  City *
                </Label>
                <Input
                  id="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className={`focus-visible:ring-[#1c1c57] rounded-md shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all text-sm py-1 ${
                    errors.city ? "border-red-500" : ""
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs">{errors.city}</p>
                )}
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="company" className="font-medium text-sm">
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="focus-visible:ring-[#1c1c57] rounded-md shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all text-sm py-1"
                />
              </div>

              {/* GST */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="gst" className="font-medium text-sm">
                  GST (Optional)
                </Label>
                <Input
                  id="gst"
                  placeholder="Your GST Number"
                  value={formData.gst}
                  onChange={(e) =>
                    setFormData({ ...formData, gst: e.target.value })
                  }
                  className="focus-visible:ring-[#1c1c57] rounded-md shadow-sm border-gray-300 hover:border-[#1c1c57] transition-all text-sm py-1"
                />
              </div>
            </div>

            {/* Product Selection */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="product" className="font-medium text-sm">
                Select Products *
              </Label>
              <div className="flex gap-2">
                <select
                  id="product"
                  value={currentProduct}
                  onChange={(e) => setCurrentProduct(e.target.value)}
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c1c57] hover:border-[#1c1c57] transition-all"
                >
                  <option value="">-- Select a product --</option>
                  {products.map((product, idx) => (
                    <option key={idx} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
                <Button
                  type="button"
                  onClick={handleAddProduct}
                  disabled={!currentProduct}
                  className="bg-[#1c1c57] hover:bg-[#2f2f5f] text-white px-4 py-2 rounded-md text-sm"
                >
                  Add
                </Button>
              </div>
              {errors.products && (
                <p className="text-red-500 text-xs">{errors.products}</p>
              )}
            </div>

            {/* Selected Products List */}
            {selectedProducts.length > 0 && (
              <div className="flex flex-col gap-2">
                <Label className="font-medium text-sm">Selected Products:</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto border border-gray-200 rounded-md p-2">
                  {selectedProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-2 bg-gray-50 p-2 rounded-md"
                    >
                      <span className="text-sm flex-1">{product.name}</span>
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`qty-${index}`} className="text-xs">
                          Qty:
                        </Label>
                        <Input
                          id={`qty-${index}`}
                          type="number"
                          min="1"
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, e.target.value)
                          }
                          className="w-16 px-2 py-1 text-sm rounded-md border-gray-300"
                        />
                        <Button
                          type="button"
                          onClick={() => handleRemoveProduct(index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-xs"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message - Full Width */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="message" className="font-medium text-sm">
                Message
              </Label>
              <textarea
                id="message"
                placeholder="What do you need?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="3"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c1c57] hover:border-[#1c1c57] transition-all text-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#1c1c57] hover:bg-[#2f2f5f] text-white w-full py-1.5 rounded-md shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm"
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