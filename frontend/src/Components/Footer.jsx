import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="border-t bg-linear-to-b from-slate-100 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r  from-gray-950 to-gray-600 bg-clip-text text-transparent">
                LaganiLens
              </h3>
            </Link>

            <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-300 max-w-sm">
              An academic exploration of AI and machine learning applied to
              Nepal&apos;s stock market, focused on understanding NEPSE through
              modern data science.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Login", path: "/login" },
                { name: "Sign Up", path: "/signup" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Project
            </h4>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-400">
              <li>Academic Research</li>
              <li>AI & Machine Learning</li>
              <li>NEPSE Market Data</li>
              <li>Educational Purpose</li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-slate-300/60 dark:bg-slate-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              LaganiLens
            </span>
            . Built for learning.
          </p>

          <p className="tracking-wide">
            Educational project • Not financial advice
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
