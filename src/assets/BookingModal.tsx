import { useEffect } from "react"
import { X } from "lucide-react"
import type { Car } from "../data/CarData"
import { useForm } from "../hook/useForm";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedCar: Car | null; 
};
const BookingModal = ({ isOpen, onClose, selectedCar }: BookingModalProps) => {
  const { status, submit } = useForm(); 
  useEffect(() => {
    if (status === "success") {
        const timer = setTimeout(onClose, 2000);
        return () => clearTimeout(timer);
    }
   }, [status, onClose]); 
  if (!isOpen) return null

  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-sm max-h-md bg-white rounded-xl shadow-lg p-6">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Book a Car</h2>
        <form onSubmit={submit} className="space-y-5">
          <input
            type="hidden"
            name="submittedAt"
            value={new Date().toISOString()}
          />
          <input type="hidden" name="formType" value="booking" />  
          <div>
            <label className="block text-sm">Full Name*</label>
            <input
              name="fullName"
              className="w-full mt-1 p-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Email Address*</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              className="w-full mt-1 p-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Car Selected</label>
            <input
              name="carSelected"
              value={selectedCar?.name || ""}
              readOnly
              className="w-full px-3 py-1 rounded bg-gray-50"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
            <label className="block text-sm">Pickup Date*</label>
            <input
              type="date"
              name="pickupDate"
              min={today}
              className="w-full mt-1 p-1 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Pickup Time*</label>
            <input
              type="time"
              name="pickupTime"
              className="w-full mt-1 p-1 border rounded-md"
              required
            />
          </div>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your rental needs"
            className="w-full mt-1 p-1 border rounded-md"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-brand-accent text-white p-2 rounded-md font-semibold"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center font-medium">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default BookingModal
