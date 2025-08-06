import { useParams, useNavigate } from "react-router-dom";

function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Category: {name}</h1>
      <div className="text-center">
        <p>We'll show questions here soon!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CategoryPage;
