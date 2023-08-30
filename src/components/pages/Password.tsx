import MaterialList from "../lists/MaterialList";
import { useTranslation } from "react-i18next";
import NavBar from "../UIComponents/NavBar";
import LargeFancyButton from "../buttons/LargeFancyButton";

export default function Example() {
  const { t } = useTranslation();

  return (
    <div className="max-w-md mx-auto">
      <NavBar pageTitle="Passord" />
      <div className=" ml-16 ml-">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sign Up
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-purpledull-400 antialiased">
          Enter your details to register.
        </p>
      </div>

      <div className="relative flex flex-col items-center rounded-xl bg-transparent bg-clip-border text-purpledull-100 shadow-none">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <MaterialList title={t(`planlegger.stedTittel`)}></MaterialList>
            <MaterialList title="Password" passwordStyle={true} />
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              htmlFor="checkbox"
              data-ripple-dark="true"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purplevibrant-500 checked:bg-purplevibrant-500 checked:before:bg-purplevibrant-500 hover:before:opacity-10"
                id="checkbox"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              htmlFor="checkbox"
            >
              <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                I agree the
                <a
                  className="font-medium transition-colors hover:text-purplevibrant-500"
                  href="#"
                >
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </label>
          </div>
          <LargeFancyButton
            label={t(`planlegger.stedTittel`)}
          ></LargeFancyButton>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Already have an account?
            <a
              className="font-medium ml-2 text-purplevibrant-500 transition-colors hover:text-blue-700"
              href="#"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
      {/* <Badge
        content={<CheckIcon className="h-4 w-4 text-white" strokeWidth={2.5} />}
        className="bg-gradient-to-tr  from-purplevibrant-400 to-purplevibrant-500 border-2 border-purplevibrant-200 shadow-lg shadow-white/420"
      >
        <Button className="bg-purplevibrant-500">Notifications</Button>
      </Badge> */}
    </div>
  );
}
