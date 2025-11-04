import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function Home() {
  const latestUpdates = [
    {
      date: "October 2024",
      title: "Paper accepted at NeurIPS 2024",
      description:
        "Our work on interpretable chest X-ray classification has been accepted as an oral presentation at NeurIPS 2024!",
    },
    {
      date: "September 2024",
      title: "New NSF Grant Awarded",
      description:
        "Received NSF funding for research on fairness in clinical AI models.",
    },
    {
      date: "August 2024",
      title: "Invited Talk at Stanford Medicine",
      description:
        "Presented recent work on explainable AI for healthcare at Stanford's Medical AI Symposium.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full flex flex-col flex-1">
        {/* Hero Section - Centered with ample whitespace */}
        <div className="flex-1 flex items-center py-16 lg:py-24">
          <div className="w-full">
            <h1 className="text-gray-900 mb-6">Trinh Minh Tuan</h1>
            <p className="text-gray-700 mb-4">PhD Candidate in Computer Science</p>
            <p className="text-gray-600 mb-2">University of California, Berkeley</p>
            <p className="text-gray-600 mb-8">
              Artificial Intelligence Lab | Advised by Prof. Michael Zhang
            </p>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700">
                My research focuses on developing interpretable machine learning models for
                healthcare applications. I'm particularly interested in the intersection of deep
                learning, explainable AI, and clinical decision support systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/research">
                  View Research
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/publications">Publications</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Latest Updates - With ample top spacing */}
        <div className="pb-16">
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
            <h2 className="text-gray-900">Latest Updates</h2>
            <Link
              to="/updates"
              className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>

          <div className="space-y-6">
            {latestUpdates.map((update, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <p className="text-gray-500 mb-1">{update.date}</p>
                <h3 className="text-gray-900 mb-1">{update.title}</h3>
                <p className="text-gray-600">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
