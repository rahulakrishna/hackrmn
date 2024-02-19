import Link from "next/link";

const links = [{ name: "Front Page", url: "/front-page" }];

const selected = "Front Page";

export default function Sidebar() {
  return (
    <div className="col-span-2 bg-gray-200 dark:bg-stone-900 dark:text-gray-400 p-4 flex flex-col justify-between text-sm">
      <div className="sticky top-4 min-h-screen max-h-screen w-full flex flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg font-extrabold mb-4">hackrmn</h1>
          <ul>
            {links.map((link) => (
              <li key={link.name} className={`ml-0 rounded-lg`}>
                <Link href={`${link.url}/comments`}>
                  <button
                    className={`${
                      selected === link.name
                        ? `bg-gray-300 dark:bg-stone-700`
                        : `bg-gray-200 dark:bg-stone-900`
                    } w-full text-left p-2 rounded-lg  m-0`}
                  >
                    {link.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-right mb-4">_thisdot</h3>
          <button className="bg-blue-500 text-white p-1 rounded-lg shadow-md mb-8">
            Submit Post
          </button>
        </div>
      </div>
    </div>
  );
}
