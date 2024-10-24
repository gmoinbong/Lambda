import React, { useState, useRef, ChangeEvent, DragEvent, FormEvent } from 'react';
import './ImageCanvas.css';

interface Asset {
  id: number;
  src: string;
  x: number;
  y: number;
  text?: string;
}

const initialAssets: Omit<Asset, 'x' | 'y'>[] = [
  { id: 1, src: '/assets/ball.png' },
  { id: 2, src: '/assets/dog.png' },
  { id: 3, src: '/assets/football.png' },
  { id: 4, src: '/assets/pets.png' },
];

const ImageCanvas: React.FC = () => {
  const dragUrl = useRef<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<Asset[]>([]);
  const [assets, setAssets] = useState<Omit<Asset, 'x' | 'y'>[]>(initialAssets);
  const [draggedImageId, setDraggedImageId] = useState<number | null>(null);
  const [text, setText] = useState<string>('');

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newAsset = { id: Date.now(), src: reader.result as string };
        setAssets((prevAssets) => [...prevAssets, newAsset]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (e: DragEvent<HTMLElement>, id: number | null, src: string) => {
    dragUrl.current = src;
    setDraggedImageId(id);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      if (draggedImageId !== null) {
        setImages((prevImages) =>
          prevImages.map((image) =>
            image.id === draggedImageId ? { ...image, x: offsetX, y: offsetY } : image
          )
        );
      } else if (dragUrl.current) {
        setImages((prevImages) => [
          ...prevImages,
          { id: Date.now(), src: dragUrl.current || '', x: offsetX, y: offsetY }
        ]);
      }
    }
    setDraggedImageId(null);
    dragUrl.current = null; 
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const offsetX = rect.width / 2;
      const offsetY = rect.height / 2;

      setImages((prevImages) => [
        ...prevImages,
        { id: Date.now(), src: '', text: text, x: offsetX, y: offsetY }
      ]);
      setText('');
    }
  };

  const handleDragStartText = (e: DragEvent<HTMLElement>, id: number) => {
    setDraggedImageId(id);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="upload-container">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="upload-input" />
        </div>
        <div className="assets-container">
          <h3>Assets</h3>
          <form onSubmit={handleAddText}>
            <div className="text-container">
              <input type="text" value={text} onChange={handleTextChange} placeholder="Enter text" className="text-input" />
              <button type="submit" className="add-text-button">Add text</button>
            </div>
          </form>
          <div className="assets">
            {assets.map((asset) => (
              <img
                key={asset.id}
                src={asset.src}
                alt=""
                draggable
                onDragStart={(e) => handleDragStart(e, null, asset.src)}
                className="asset"
              />
            ))}
          </div>
        </div>
      </div>
      <div
        ref={canvasRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="canvas"
      >
        {images.map((image) => (
          <React.Fragment key={image.id}>
            {image.src && (
              <img
                src={image.src}
                alt=""
                draggable
                onDragStart={(e) => handleDragStart(e, image.id, image.src)}
                className="canvas-element"
                style={{
                  position: 'absolute',
                  top: image.y,
                  left: image.x,
                  width: 100,
                  height: 100,
                }}
              />
            )}
            {image.text && (
              <div
                className="canvas-text"
                style={{
                  position: 'absolute',
                  top: image.y,
                  left: image.x,
                  whiteSpace: 'nowrap'
                }}
                draggable
                onDragStart={(e) => handleDragStartText(e, image.id)}
              >
                {image.text}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ImageCanvas;
