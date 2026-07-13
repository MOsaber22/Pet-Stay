import { Link } from "react-router-dom";
import {
  HiOutlineDocumentText,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineExclamationTriangle,
  HiOutlineClipboardDocumentList,
  HiOutlineXCircle,
  HiOutlineClock,
  HiOutlineEnvelope,
  HiCheckCircle,
} from "react-icons/hi2";
import { GoLaw } from "react-icons/go";


const CheckItem = ({ children }) => (
  <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-base transition-all duration-300 hover:translate-x-1.5 hover:text-gray-900 dark:hover:text-white">
    <HiCheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400 mt-1 shrink-0" />
    {children}
  </div>
);

const sections = [
  {
    id: "intro",
    number: "01",
    icon: HiOutlineDocumentText,
    title: "Introduction",
    content: (
      <div className="space-y-3">
        <p className="text-gray-900 font-medium dark:text-white">
          Welcome to PetStay Terms of Service.
        </p>
        <CheckItem>By using PetStay you agree to these terms</CheckItem>
        <CheckItem>These rules ensure safety for users and pets</CheckItem>
      </div>
    ),
  },

  {
    id: "eligibility",
    number: "02",
    icon: HiOutlineUser,
    title: "Eligibility",
    content: (
      <div className="space-y-3">
        <CheckItem>Must be at least 13 years old</CheckItem>
        <CheckItem>Provide accurate personal information</CheckItem>
        <CheckItem>You are responsible for your account</CheckItem>
      </div>
    ),
  },

  {
    id: "responsibilities",
    number: "03",
    icon: HiOutlineClipboardDocumentList,
    title: "User Responsibilities",
    content: (
      <div className="space-y-3">
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-4 text-teal-800 dark:text-teal-300 text-sm font-medium">
          Use PetStay respectfully and ethically at all times.
        </div>

        <CheckItem>No fake or misleading content</CheckItem>
        <CheckItem>Respect all users</CheckItem>
        <CheckItem>No illegal activity</CheckItem>
      </div>
    ),
  },

  {
    id: "adoption",
    number: "04",
    icon: HiOutlineHeart,
    title: "Pet Adoption Rules",
    content: (
      <div className="space-y-3">
        <CheckItem>Adoption is not guaranteed</CheckItem>
        <CheckItem>Final decision is by owner or shelter</CheckItem>
        <CheckItem>We are not responsible after adoption</CheckItem>
      </div>
    ),
  },

  {
    id: "prohibited",
    number: "05",
    icon: HiOutlineXCircle,
    title: "Prohibited Activities",
    content: (
      <div className="space-y-3">
        <CheckItem>Fake accounts or impersonation</CheckItem>
        <CheckItem>Spam or advertisements</CheckItem>
        <CheckItem>Harmful animal content</CheckItem>
        <CheckItem>Attempting to hack system</CheckItem>
      </div>
    ),
  },

  {
    id: "liability",
    number: "06",
    icon: HiOutlineExclamationTriangle,
    title: "Limitation of Liability",
    content: (
      <div className="space-y-3">
        <CheckItem>No guarantee of adoption outcomes</CheckItem>
        <CheckItem>No responsibility for user interactions</CheckItem>
        <CheckItem>No liability for misuse or damage</CheckItem>
      </div>
    ),
  },

  {
    id: "changes",
    number: "07",
    icon: HiOutlineClock,
    title: "Changes to Terms",
    content: (
      <div className="space-y-3">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-yellow-800 dark:text-yellow-300 text-sm">
          These terms may be updated at any time without prior notice.
        </div>

        <CheckItem>Continued use means acceptance of updates</CheckItem>
      </div>
    ),
  },
];

function Terms() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

      <section className="py-24 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 text-center transition-colors duration-300">
        <GoLaw className="mx-auto w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />

        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Terms <span className="text-teal-600">of Service</span>
        </h1>

        <div className="w-16 h-1 bg-teal-600 mx-auto mt-4 rounded"></div>

        <p className="text-gray-600 dark:text-gray-300 mt-4 text-base max-w-xl mx-auto">
          Clear, simple rules that keep{" "}
          <span className="text-teal-600 font-bold">Pet</span>
          <span className="font-bold text-gray-600 dark:text-white">Stay</span> safe and trustworthy for everyone.
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-14">
        {sections.map((s) => {
          const Icon = s.icon;

          return (
            <section
              key={s.id}
              id={s.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">

                <span className="text-xs bg-teal-600 text-white font-bold rounded-full px-2 py-1 shadow-sm">
                  {s.number}
                </span>

                <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full transition-all duration-300 group-hover:bg-teal-200 dark:group-hover:bg-teal-800">
                  <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400 transition-colors duration-300 group-hover:text-teal-700 dark:group-hover:text-teal-300" />
                </div>

                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  {s.title}
                </h2>
              </div>

              {s.content}
            </section>
          );
        })}

        <section className="bg-teal-50 dark:bg-gray-800 border border-teal-200 dark:border-gray-700 shadow-sm rounded-2xl p-8 text-center transition-colors duration-300">
          <HiOutlineEnvelope className="mx-auto w-6 h-6 text-teal-600 dark:text-teal-400 mb-3" />

          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Need Help?
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-5">
            Contact us anytime for questions about these terms.
          </p>

          <Link
            to="/contact"
            className="bg-teal-600 hover:bg-teal-700 active:scale-95 transition-all text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            Contact Support
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Terms;