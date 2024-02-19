import StoryList from "../components/story-list";

const Stories = async ({
  params,
  children,
}: {
  params: { storylist: string };
  children: React.ReactNode;
}) => {
  const response = await fetch(`https://api.hackerwebapp.com/news`);
  const stories = await response.json();
  return (
    <div className="col-span-10 p-4">
      <div className="grid grid-cols-12 gap-2 min-h-screen">
        <div className="col-span-4 p-4">
          <StoryList type={params.storylist} stories={stories} />
        </div>

        <div className="col-span-8 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Stories;
