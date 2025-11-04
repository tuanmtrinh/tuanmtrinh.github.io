import { ExternalLink } from "lucide-react";

export function PublicationsPage() {
  const publications = [
    {
      title:
        "Attention-Guided Deep Learning for Interpretable Chest X-Ray Classification",
      authors: "S. Chen, M. Zhang, J. Lee, K. Patel",
      venue: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2024,
      note: "Oral Presentation (Top 1%)",
      links: {
        paper: "https://arxiv.org",
        code: "https://github.com",
      },
    },
    {
      title:
        "Mitigating Demographic Bias in Clinical Risk Prediction Models",
      authors: "S. Chen, R. Williams, M. Zhang",
      venue: "International Conference on Machine Learning (ICML)",
      year: 2024,
      links: {
        paper: "https://arxiv.org",
      },
    },
    {
      title:
        "Multi-modal Fusion Networks for Cancer Treatment Response Prediction",
      authors: "S. Chen, A. Kumar, L. Thompson, M. Zhang",
      venue: "Nature Medicine",
      year: 2023,
      links: {
        paper: "https://nature.com",
      },
    },
    {
      title:
        "Transfer Learning for Medical Image Segmentation with Limited Annotations",
      authors: "S. Chen, D. Brown",
      venue: "IEEE Transactions on Medical Imaging",
      year: 2023,
      links: {
        paper: "https://ieeexplore.ieee.org",
        code: "https://github.com",
      },
    },
    {
      title:
        "Uncertainty Quantification in Deep Learning Models for Clinical Decision Support",
      authors: "S. Chen, M. Zhang, P. Anderson",
      venue: "AAAI Conference on Artificial Intelligence",
      year: 2022,
      links: {
        paper: "https://arxiv.org",
      },
    },
  ];

  const manuscripts = [
    {
      title: "Federated Learning for Privacy-Preserving Medical AI",
      authors: "S. Chen, K. Liu, M. Zhang",
      status: "Under review at Nature Machine Intelligence",
    },
    {
      title: "Cross-Modal Attention Mechanisms for Multi-Organ Segmentation",
      authors: "S. Chen, J. Park, A. Kumar, M. Zhang",
      status: "In preparation for CVPR 2025",
    },
    {
      title: "Addressing Dataset Shift in Clinical Machine Learning",
      authors: "S. Chen, M. Zhang",
      status: "Manuscript in preparation",
    },
  ];

  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof publications>);

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-gray-900 mb-12">Publications</h1>

        {/* Manuscripts in Preparation */}
        <div className="mb-12">
          <h2 className="text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Manuscripts in Preparation
          </h2>
          <div className="space-y-6">
            {manuscripts.map((manuscript, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-4">
                <h3 className="text-gray-900 mb-1">{manuscript.title}</h3>
                <p className="text-gray-600 mb-1">{manuscript.authors}</p>
                <p className="text-gray-500 italic">{manuscript.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Published Papers */}
        <div>
          <h2 className="text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Published Papers
          </h2>
          {years.map((year) => (
            <div key={year} className="mb-10">
              <h3 className="text-gray-700 mb-4">{year}</h3>
              <div className="space-y-6">
                {publicationsByYear[year].map((pub, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <h4 className="text-gray-900 mb-1">{pub.title}</h4>
                    <p className="text-gray-600 mb-1">{pub.authors}</p>
                    <p className="text-gray-700 mb-1">
                      <em>{pub.venue}</em>, {pub.year}
                    </p>
                    {pub.note && <p className="text-blue-600 mb-2">{pub.note}</p>}
                    <div className="flex flex-wrap gap-3">
                      {pub.links.paper && (
                        <a
                          href={pub.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Paper
                        </a>
                      )}
                      {pub.links.code && (
                        <a
                          href={pub.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            For a complete list of publications, please visit my{" "}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline"
            >
              Google Scholar profile
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
