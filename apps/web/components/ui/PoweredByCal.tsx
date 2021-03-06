import Link from "next/link";

import { useIsEmbed } from "@calcom/embed-core/embed-iframe";

import { useLocale } from "@lib/hooks/useLocale";

const PoweredByCal = () => {
  const { t } = useLocale();
  const isEmbed = useIsEmbed();
  return (
    <div className={"p-1 text-center text-xs sm:text-right" + (isEmbed ? " max-w-3xl" : "")}>
      <Link href={`https://vicinocard.com`}>
        <a target="_blank" className="text-bookinglight opacity-50 hover:opacity-100 dark:text-white">
          {t("powered_by")}{" "}
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="relative -mt-px inline h-[10px] w-auto dark:hidden"
              src="//cdn.vicinocard.com/svg/vicinocard-long-white.svg"
              alt="vicino•ical"
            />
          }
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="relativ -mt-px hidden h-[10px] w-auto dark:inline"
              src="//cdn.vicinocard.com/svg/vicinocard-long-black.svg"
              alt="vicino•ical"
            />
          }
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;
