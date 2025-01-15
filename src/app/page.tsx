"use client";

import { setUserLocale } from "@/hook/cookie";
import useAppTranslation from "@/hook/useAppTranslation";
import { STRINGS } from "@/utils/strings";

export default function Home() {
  const { translate } = useAppTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 sm:p-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {translate(STRINGS.TEXT.HOME_PAGE)}
        </h1>
        <p className="text-lg text-gray-600">
          {translate(STRINGS.TEXT.HOME_PAGE_DESCRIPTIONS)}
        </p>
      </header>

      {/* Language Selector Section */}
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          {translate(STRINGS.TEXT.CHANGE_LANGUAGE)}
        </h2>
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setUserLocale("en")}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            {translate(STRINGS.ACTIONS.LANGUAGE.ENGLISH)}
          </button>
          <button
            onClick={() => setUserLocale("de")}
            className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition"
          >
            {translate(STRINGS.ACTIONS.LANGUAGE.GERMAN)}
          </button>
        </div>

        {/* Selected Language Info */}
        <div className="text-center">
          <p className="text-gray-700 text-lg">
            {translate(STRINGS.TEXT.SELECTED_LANG)}
          </p>
          <p className="text-gray-600 mt-2">
            {translate(STRINGS.GENERIC.ENTITY, { entity: "apple" })}
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-600 text-sm">
        {translate(STRINGS.FOOTER.COPYRIGHT)}
      </footer>
    </div>
  );
}
