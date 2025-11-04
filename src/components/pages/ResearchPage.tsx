export function ResearchPage() {
  const overview = {
    interests: [
      "Explainable and Interpretable AI",
      "Machine Learning for Healthcare",
      "Fairness and Bias in AI Systems",
      "Multi-modal Deep Learning",
      "Medical Image Analysis",
      "Clinical Decision Support Systems",
    ],
    statement:
      "My research program focuses on developing trustworthy AI systems for healthcare applications. I aim to bridge the gap between state-of-the-art machine learning techniques and practical clinical deployment by addressing key challenges in interpretability, fairness, and reliability.",
  };

  const researchAreas = [
    {
      title: "Interpretable Deep Learning for Medical Imaging",
      description:
        "Developing attention-based neural networks that provide visual explanations for diagnostic predictions in medical image analysis. This work aims to increase clinician trust and adoption of AI-assisted diagnosis systems.",
      projects: [
        {
          name: "Attention-Guided Chest X-Ray Classification",
          status: "Ongoing",
          funding: "NSF Grant #12345678",
          description:
            "Creating interpretable models for automated chest X-ray diagnosis with visual attention mechanisms that highlight clinically relevant regions.",
        },
        {
          name: "Explainable Medical Image Segmentation",
          status: "Completed",
          description:
            "Developed methods for explaining segmentation decisions in medical imaging, published in IEEE TMI 2023.",
        },
      ],
    },
    {
      title: "Fairness and Bias Mitigation in Clinical AI",
      description:
        "Investigating sources of bias in machine learning models for patient risk stratification and developing novel debiasing techniques that maintain predictive performance while ensuring equitable outcomes across demographic groups.",
      projects: [
        {
          name: "Demographic Bias in Risk Prediction",
          status: "Ongoing",
          collaboration: "Stanford Medical School",
          description:
            "Analyzing and mitigating bias in clinical risk prediction models across race, gender, and socioeconomic factors.",
        },
        {
          name: "Fair Learning with Limited Subgroup Data",
          status: "Ongoing",
          description:
            "Developing methods to ensure fairness when minority groups are underrepresented in training data.",
        },
      ],
    },
    {
      title: "Multi-modal Learning for Treatment Response Prediction",
      description:
        "Combining diverse data modalities including electronic health records, medical imaging, and genomic data to predict patient responses to treatments. This integrative approach leverages complementary information from different sources.",
      projects: [
        {
          name: "Cancer Treatment Response Prediction",
          status: "Completed",
          description:
            "Developed multi-modal fusion networks for predicting patient response to cancer treatments, published in Nature Medicine 2023.",
        },
        {
          name: "Cross-Modal Attention Mechanisms",
          status: "Ongoing",
          description:
            "Investigating attention mechanisms for learning cross-modal interactions between imaging and clinical data.",
        },
      ],
    },
    {
      title: "Privacy-Preserving Machine Learning for Healthcare",
      description:
        "Exploring federated learning and differential privacy techniques to enable collaborative model development across institutions while protecting patient privacy.",
      projects: [
        {
          name: "Federated Learning for Medical AI",
          status: "Ongoing",
          collaboration: "Google Health",
          description:
            "Developing federated learning frameworks for training medical imaging models across multiple hospitals without sharing patient data.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-gray-900 mb-12">Research</h1>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-gray-900 mb-4 border-b border-gray-200 pb-2">Overview</h2>
          <p className="text-gray-700 mb-6">{overview.statement}</p>
          <div>
            <h3 className="text-gray-900 mb-3">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {overview.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Research Areas */}
        {researchAreas.map((area, areaIndex) => (
          <div key={areaIndex} className="mb-12">
            <h2 className="text-gray-900 mb-3 border-b border-gray-200 pb-2">
              {area.title}
            </h2>
            <p className="text-gray-700 mb-6">{area.description}</p>

            <div className="space-y-6">
              {area.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="border-l-2 border-gray-300 pl-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900 flex-1">{project.name}</h3>
                    <span className="text-gray-500 text-sm ml-4">{project.status}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                    {project.funding && <span>• {project.funding}</span>}
                    {project.collaboration && (
                      <span>• In collaboration with {project.collaboration}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Interested in collaboration? Feel free to{" "}
            <a href="mailto:tuanmt@berkeley.edu" className="text-gray-900 hover:underline">
              reach out
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
