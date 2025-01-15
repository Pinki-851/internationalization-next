import { STRINGS } from '@/utils/strings';
import { TranslationValues, useTranslations } from 'next-intl';

export type TTranslateFn = (
  key: string,
  values?: TranslationValues,
  fallback?: string,
) => string;

/**
 * Custom hook to handle application translations.
 * Provides an enhanced translation function with graceful fallbacks.
 * @returns {object} An object containing:
 * - `translate`: A function for translation with fallback handling.
 * - `STRINGS`: The translation keys object.
 */
const useAppTranslation = () => {
  const translate = useTranslations();

  /**
   * Translates a given key with optional dynamic values and fallback text.
   * @param {string} key - The translation key.
   * @param {TranslationValues} - Dynamic values for the translation.
   * @param {string} - Fallback text if translation is missing.
   * @returns {string} The translated text or the fallback text if missing.
   */
  const translateWithFallback: TTranslateFn = (
    key: string,
    values: TranslationValues = {},
    fallback = translate(STRINGS.GENERIC.MISSING_TRANSLATION),
  ): string => {
    try {
      return translate(key, values) || fallback;
    } catch {
      return fallback;
    }
  };

  return { translate: translateWithFallback, STRINGS };
};

export default useAppTranslation;
