const Footer = () => {
  return (
    <div className="px-4 md:px-0 pt-8 pb-10 text-xs w-full text-textGrey border-b border-borderSummary md:border-none lg:grid grid-cols-5">
      <div className="hidden lg:flex group gap-2 h-max items-center col-span-2">
        <svg
          aria-hidden="true"
          height="24"
          viewBox="0 0 16 16"
          version="1.1"
          width="24"
          data-view-component="true"
          className="fill-textGrey group-hover:fill-darkgrey"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <a
          href="https://github.com/"
          className=" text-textGrey group-hover:text-darkgrey flex"
        >
          © 2022 GitHub, Inc.
        </a>
      </div>
      <ul className="grid grid-cols-3 gap-9 col-span-3 ">
        <div className="flex flex-col gap-2">
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://github.blog/">Blog</a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://github.com/about">About</a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://shop.github.com/">Shop</a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://support.github.com/?tags=dotcom-footer">
              Contact GitHub
            </a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://github.com/pricing">Pricing</a>
          </li>
        </div>
        <div className="flex flex-col gap-2">
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://docs.github.com/">Api</a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://services.github.com/">Training</a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://www.githubstatus.com/">Status</a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://docs.github.com/articles/github-security/">
              Security
            </a>
          </li>
        </div>
        <div className="flex flex-col gap-2">
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">
              Terms
            </a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
              Privacy
            </a>
          </li>
          <li className="hover:text-blue-600 hover:underline">
            <a href="https://docs.github.com/">Docs</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
