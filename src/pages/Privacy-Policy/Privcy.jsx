import { Link } from "react-router-dom";
import {
  HiOutlineShieldCheck,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineCake,
  HiOutlineLockClosed,
  HiOutlineClock,
  HiOutlineFingerPrint,
  HiOutlineFaceSmile,
  HiOutlineLink,
  HiOutlineDocumentText,
  HiOutlineEnvelope,
} from "react-icons/hi2";

const CheckItem = ({ children }) => (
  <div className="flex items-start gap-2 text-gray-600 text-base">
    <span className="text-teal-500 font-bold">✔</span>
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
      <div className="space-y-2">
        <CheckItem>
          <span>
            Welcome to{" "}
            <span className="text-teal-600 font-bold">Pet</span>
            <span className="font-bold">Stay</span>
          </span>
        </CheckItem>
        <CheckItem>Your privacy is important to us</CheckItem>
        <CheckItem>You agree to this policy by using our services</CheckItem>
      </div>
    ),
  },
  {
    id: "collect",
    number: "02",
    icon: HiOutlineUser,
    title: "Information We Collect",
    content: (
      <div className="space-y-2">
        <CheckItem>Full name, email, phone</CheckItem>
        <CheckItem>Pet details (age, breed, photos)</CheckItem>
        <CheckItem>Account data</CheckItem>
        <CheckItem>Usage data (IP, device, pages)</CheckItem>
      </div>
    ),
  },
  {
    id: "use",
    number: "03",
    icon: HiOutlineHeart,
    title: "How We Use Your Info",
    content: (
      <div className="space-y-2">
        <CheckItem>Manage accounts</CheckItem>
        <CheckItem>Connect adopters</CheckItem>
        <CheckItem>Improve services</CheckItem>
      </div>
    ),
  },
  {
    id: "share",
    number: "04",
    icon: HiOutlineShare,
    title: "Sharing",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-teal-700 font-semibold">
          <HiOutlineLockClosed className="w-5 h-5" />
          We do not sell your data
        </div>
        <CheckItem>Shared only when necessary</CheckItem>
      </div>
    ),
  },
  {
    id: "cookies",
    number: "05",
    icon: HiOutlineCake,
    title: "Cookies",
    content: (
      <div className="space-y-2">
        <CheckItem>Used for sessions</CheckItem>
        <CheckItem>Used for analytics</CheckItem>
      </div>
    ),
  },
  {
    id: "security",
    number: "06",
    icon: HiOutlineLockClosed,
    title: "Security",
    content: (
      <div className="space-y-2">
        <CheckItem>We protect your data</CheckItem>
        <CheckItem>No system is 100% secure</CheckItem>
      </div>
    ),
  },
  {
    id: "retention",
    number: "07",
    icon: HiOutlineClock,
    title: "Data Retention",
    content: <CheckItem>We keep data only as needed</CheckItem>,
  },
  {
    id: "rights",
    number: "08",
    icon: HiOutlineFingerPrint,
    title: "Your Rights",
    content: (
      <div className="space-y-2">
        <CheckItem>Access your data</CheckItem>
        <CheckItem>Edit your data</CheckItem>
        <CheckItem>Delete your account</CheckItem>
      </div>
    ),
  },
  {
    id: "children",
    number: "09",
    icon: HiOutlineFaceSmile,
    title: "Children's Privacy",
    content: (
      <CheckItem>Not intended for users under 13</CheckItem>
    ),
  },
  {
    id: "links",
    number: "10",
    icon: HiOutlineLink,
    title: "Third-Party Links",
    content: (
      <CheckItem>We are not responsible for external websites</CheckItem>
    ),
  },
  {
    id: "changes",
    number: "11",
    icon: HiOutlineDocumentText,
    title: "Changes",
    content: (
      <CheckItem>Policy may be updated anytime</CheckItem>
    ),
  },
];

function Privacy() {
  return (
    <div className="bg-white min-h-screen">

      <section className="py-20 bg-gradient-to-br from-teal-50 to-white text-center">
        <HiOutlineShieldCheck className="mx-auto w-10 h-10 text-teal-600 mb-4" />
        <h1 className="text-5xl font-extrabold text-gray-800">
          Privacy <span className="text-teal-600">Policy</span>
        </h1>
        <p className="text-gray-500 mt-4 text-base">
          Your trust matters to us at PetStay.
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              id={s.id}
              className="border-l-4 border-teal-500 pl-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                  {s.number}
                </span>
                <Icon className="w-5 h-5 text-teal-500" />
                <h2 className="text-base font-bold text-gray-800">
                  {s.title}
                </h2>
              </div>

              {s.content}
            </section>
          );
        })}

        <section
          id="contact"
          className="bg-teal-50 rounded-2xl p-6 text-center"
        >
          <HiOutlineEnvelope className="mx-auto w-6 h-6 text-teal-600 mb-3" />
          <h2 className="text-base font-bold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 text-base mb-4">
            Have questions? Reach out anytime.
          </p>

          <Link
            to="/contact"
            className="bg-teal-600 text-white px-6 py-2 rounded-full text-base"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
}
export default Privacy