// components/ProductDetail/ProductReviewPage.js
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

const ProductReviewPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar a avaliação
    console.log("Produto ID:", id);
    console.log("Avaliação:", rating);
    console.log("Comentário:", comment);
    history.push(`/produtos/${id}`);
  };

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Avalie o Produto</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-3xl ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
              onClick={() => handleRatingClick(index)}
            >
              <FaStar />
            </span>
          ))}
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Escreva seu comentário"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Enviar Avaliação
        </button>
      </form>
    </div>
  );
};

export default ProductReviewPage;
