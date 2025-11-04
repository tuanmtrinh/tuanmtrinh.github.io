export function UpdatesPage() {
  const updates = [
    {
      date: "October 2024",
      year: 2024,
      title: "Paper accepted at NeurIPS 2024",
      description:
        "Our work on interpretable chest X-ray classification has been accepted as an oral presentation at NeurIPS 2024! This represents the top 1% of all submissions. Looking forward to presenting in Vancouver this December.",
      category: "Publication",
    },
    {
      date: "September 2024",
      year: 2024,
      title: "New NSF Grant Awarded",
      description:
        "Received NSF funding for research on fairness in clinical AI models. This three-year grant will support our work on developing debiasing techniques for patient risk stratification systems.",
      category: "Funding",
    },
    {
      date: "August 2024",
      year: 2024,
      title: "Invited Talk at Stanford Medicine",
      description:
        "Presented recent work on explainable AI for healthcare at Stanford's Medical AI Symposium. Great discussions with clinicians and researchers about bridging the gap between AI research and clinical practice.",
      category: "Talk",
    },
    {
      date: "July 2024",
      year: 2024,
      title: "ICML Paper Presentation",
      description:
        "Presented our paper on mitigating demographic bias in clinical risk prediction models at ICML 2024 in Vienna. Received excellent feedback from the fairness in ML community.",
      category: "Conference",
    },
    {
      date: "June 2024",
      year: 2024,
      title: "Summer Internship at Google Health",
      description:
        "Started a research internship at Google Health, working on large-scale medical imaging models. Excited to collaborate with their AI research team on improving model interpretability.",
      category: "Professional",
    },
    {
      date: "May 2024",
      year: 2024,
      title: "Teaching Award",
      description:
        "Honored to receive the Outstanding Graduate Student Instructor Award for my work as a TA in CS 189: Introduction to Machine Learning.",
      category: "Award",
    },
    {
      date: "April 2024",
      year: 2024,
      title: "Collaboration with UCSF",
      description:
        "Launched a new collaboration with UCSF Medical Center to validate our AI models on real clinical data. This partnership will help us better understand deployment challenges.",
      category: "Collaboration",
    },
    {
      date: "March 2024",
      year: 2024,
      title: "Workshop Organization",
      description:
        "Co-organizing a workshop on 'Trustworthy AI for Healthcare' at the upcoming AI & Health conference. Call for papers is now open!",
      category: "Service",
    },
    {
      date: "December 2023",
      year: 2023,
      title: "Nature Medicine Publication",
      description:
        "Our multi-modal fusion networks paper was published in Nature Medicine. This work demonstrates the potential of combining diverse data modalities for treatment response prediction.",
      category: "Publication",
    },
    {
      date: "November 2023",
      year: 2023,
      title: "Best Poster Award at NeurIPS",
      description:
        "Received the Best Poster Award at the NeurIPS Workshop on Machine Learning for Health.",
      category: "Award",
    },
  ];

  // Group updates by year
  const updatesByYear = updates.reduce((acc, update) => {
    if (!acc[update.year]) {
      acc[update.year] = [];
    }
    acc[update.year].push(update);
    return acc;
  }, {} as Record<number, typeof updates>);

  const years = Object.keys(updatesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-gray-900 mb-4">Updates</h1>
        <p className="text-gray-600 mb-12">
          Latest news, achievements, and announcements from my research and academic activities.
        </p>

        {years.map((year) => (
          <div key={year} className="mb-12">
            <h2 className="text-gray-900 mb-6 border-b border-gray-200 pb-2">{year}</h2>
            <div className="space-y-6">
              {updatesByYear[year].map((update, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-gray-500">{update.date}</p>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                      {update.category}
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-1">{update.title}</h3>
                  <p className="text-gray-600">{update.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            For real-time updates, follow me on{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
