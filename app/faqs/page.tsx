import Support from "@/components/common/Support";
import { FaqForm } from "@/components/faqs/FaqForm";
import { FaqQuestions } from "@/components/faqs/FaqQuestions";

export default function FaqsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl">Frequently Asked Questions</h1>
                <p>Let us know how we can help.</p>
            </div>
            <FaqQuestions />
            <FaqForm />
            <Support />
        </div>
    )
}
