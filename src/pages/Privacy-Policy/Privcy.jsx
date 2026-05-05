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
  <div className="flex items-start gap-2 text-gray-600 text-base hover:translate-x-1 transition hover:text-gray-900">
    <span className="text-teal-600 text-lg">✔</span>
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
        <CheckItem>Welcome to PetStay</CheckItem>
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
      <div className="space-y-3">
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
      <div className="space-y-3">
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
      <div className="space-y-3">
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
      <div className="space-y-3">
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
      <div className="space-y-3">
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
      <div className="space-y-3">
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
    content: <CheckItem>Not intended for users under 13</CheckItem>,
  },
  {
    id: "links",
    number: "10",
    icon: HiOutlineLink,
    title: "Third-Party Links",
    content: <CheckItem>We are not responsible for external websites</CheckItem>,
  },
  {
    id: "changes",
    number: "11",
    icon: HiOutlineDocumentText,
    title: "Changes",
    content: <CheckItem>Policy may be updated anytime</CheckItem>,
  },
];

function Privacy() {
  return (
    <div className="bg-white min-h-screen">

      <section className="py-24 bg-gradient-to-br from-teal-50 to-white text-center">
        <HiOutlineShieldCheck className="mx-auto w-10 h-10 text-teal-600 mb-4" />
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Privacy <span className="text-teal-600">Policy</span>
        </h1>
        <div className="w-16 h-1 bg-teal-600 mx-auto mt-4 rounded"></div>
        <p className="text-gray-600 mt-4 text-base max-w-xl mx-auto leading-relaxed">
          Your trust matters to us at
          <span className="text-teal-600 font-bold"> Pet</span>
          <span className="font-bold">Stay</span>
        </p>
      </section>

      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-14">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              id={s.id}
              className="bg-white even:bg-gray-50/40 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs bg-teal-600 text-white font-bold rounded-full px-2.5 py-1 shadow-sm">
                  {s.number}
                </span>

                <div className="bg-teal-100 p-2.5 rounded-full group-hover:bg-teal-200 transition all">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>

                <h2 className="text-lg font-bold text-gray-900 ">
                  {s.title}
                </h2>
              </div>

              {s.content}
            </section>
          );
        })}

        <section className="bg-teal-50 border border-teal-200 shadow-sm rounded-2xl p-8 text-center">
          <HiOutlineEnvelope className="mx-auto w-6 h-6 text-teal-600 mb-3" />
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-5">
            Have questions? Reach out anytime.
          </p>

          <Link
            to="/contact"
            className="bg-teal-600 hover:bg-teal-700 active:scale-95 transition-all text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Privacy;