import { Mail, MapPin, Building } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-gray-900 mb-12">Contact</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600">
              I'm always interested in discussing research collaborations, speaking opportunities,
              or potential postdoctoral positions. Feel free to reach out via email.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:tuanmt@berkeley.edu"
                    className="text-gray-900 hover:underline"
                  >
                    tuanmt@berkeley.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-500 mb-1">Office</p>
                  <p className="text-gray-900">
                    Soda Hall, Room 380
                    <br />
                    Computer Science Division
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-500 mb-1">Address</p>
                  <p className="text-gray-900">
                    University of California, Berkeley
                    <br />
                    Berkeley, CA 94720
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-gray-900 mb-4">Office Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p>Tuesdays: 2:00 PM - 4:00 PM</p>
                <p>Thursdays: 10:00 AM - 12:00 PM</p>
                <p className="text-gray-500 italic">Or by appointment</p>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Connect</h2>
              <div className="space-y-2">
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Google Scholar
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
