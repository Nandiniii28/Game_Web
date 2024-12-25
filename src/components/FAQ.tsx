import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is it safe to play with real money on Finunique small pvt ltd?",
    answer: "Yes, absolutely! We use industry-standard encryption and security measures to protect your data and transactions. Our platform is RNG certified and regularly audited for fairness."
  },
  {
    question: "How do I start playing games?",
    answer: "Simply create an account, verify your details, add money to your wallet, and you're ready to start playing! We recommend starting with practice games to familiarize yourself with the platform."
  },
  {
    question: "What are the withdrawal options?",
    answer: "We support multiple withdrawal methods including direct bank transfer, UPI, and popular e-wallets. Withdrawals are processed within 24-48 hours after KYC verification."
  },
  {
    question: "Is online rummy legal in India?",
    answer: "Yes, rummy is recognized as a game of skill by the Supreme Court of India and is legal to play online for cash prizes in most Indian states."
  },
  {
    question: "What if I face technical issues while playing?",
    answer: "Our 24/7 customer support team is always available to help. You can reach us through live chat, email, or phone support for immediate assistance."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-5 bg-light faq-section">
      <div className="container">
        <h2 className="h2 text-center mb-5">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex !== index ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                </button>
              </h3>
              <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};