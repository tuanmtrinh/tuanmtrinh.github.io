export function AboutPage() {
  const education = [
    {
      degree: "PhD in Computer Science",
      institution: "University of California, Berkeley",
      period: "2021 - Present",
      note: "Expected graduation: 2025",
    },
    {
      degree: "MS in Computer Science",
      institution: "Stanford University",
      period: "2019 - 2021",
    },
    {
      degree: "BS in Computer Science",
      institution: "MIT",
      period: "2015 - 2019",
      note: "Summa Cum Laude",
    },
  ];

  const interests = [
    "Explainable AI",
    "Machine Learning for Healthcare",
    "Deep Learning",
    "Clinical Decision Support",
    "Medical Image Analysis",
    "Model Interpretability",
  ];

  return (
    <div className="min-h-screen px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-gray-900 mb-12">About</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-gray-900 mb-4">Biography</h2>
              <div className="prose prose-gray max-w-none space-y-4">
                <p className="text-gray-600">
                  I am a PhD candidate in Computer Science at UC Berkeley, working under the
                  supervision of Prof. Michael Zhang in the Artificial Intelligence Lab. My research
                  is at the intersection of machine learning and healthcare, with a focus on
                  developing interpretable AI systems that can assist clinicians in making informed
                  decisions.
                </p>
                <p className="text-gray-600">
                  Before joining Berkeley, I completed my Master's degree at Stanford University,
                  where I worked on deep learning models for medical image segmentation. I received
                  my Bachelor's degree from MIT, graduating with highest honors.
                </p>
                <p className="text-gray-600">
                  My work has been published in leading conferences and journals including NeurIPS,
                  ICML, and Nature Medicine. I am passionate about bridging the gap between
                  state-of-the-art AI research and practical clinical applications.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <p className="text-gray-900">{item.degree}</p>
                    <p className="text-gray-600">{item.institution}</p>
                    <p className="text-gray-500">{item.period}</p>
                    {item.note && <p className="text-gray-600 italic">{item.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-gray-900 mb-4">Research Interests</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-white border border-gray-200 rounded text-gray-700"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
