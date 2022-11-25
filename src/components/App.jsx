import React, { useState, useEffect } from "react";
import css from "./App.module.css";

import { fetchImagesApi } from "../services/images-api";

import {Container} from "./Container/Container";
import {Searchbar} from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import {Button} from "./Button/Button";
import {Modal} from "./Modal/Modal";
import {Loader} from "./Loader/Loader";

export function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [largeImageURL, setLargeImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  //const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!searchQuery) return;
    //let res = 0;
    const fetchImages = () => {
      fetchImagesApi(currentPage, searchQuery)
        .then((data) => {  
          setImages((prevImages) => { 
            const res = [...prevImages, ...data].length;
            if (currentPage < Math.ceil(res / 15)) {
              setShowLoadMore(true);
            } else { setShowLoadMore(false);}
            return [...prevImages, ...data];
          }); 
          
          if (data.length === 0) {
            return setError(`No results were found for ${searchQuery}!`);
          } 
        })
      .catch((error) => {
        setError('Something went wrong. Try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
    };

    fetchImages();
  }, [currentPage, searchQuery]);

  const onChangeQuery = query => {
    setIsLoading(true);
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
  };

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const handleLargeURLImage = (data) => {
    setLargeImageURL(data);
    setShowModal(true);
  };
  
  const onNextFetch = () => {
    setCurrentPage(currentPage + 1);
  };
  
  return (
      <div className={css.App}>
        <Container>
          {showModal && (
            <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
          )}
          <Searchbar
            onSubmit={onChangeQuery}
            searchQuery={searchQuery}
          />
          {images.length > 0 && (
            <ImageGallery
              images={images}
              handleLargeURLImage={handleLargeURLImage}
            />
          )}
          {isLoading ? (
            <Loader />
        ) : (
              showLoadMore && (<Button onClick={onNextFetch} />) 
          )}
        </Container>
      </div>
    );
}