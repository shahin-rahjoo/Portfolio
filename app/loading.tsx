import { LoadingSpinner } from "@/components/loading-spinner";
const Loading = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default Loading;
