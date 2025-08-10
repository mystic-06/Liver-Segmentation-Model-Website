# Liver Tumor Segmentation using Deep Learning  

**Automated liver and tumor segmentation** from medical images using a deep learning–based U-Net architecture.  
This project demonstrates accurate and efficient segmentation of liver regions and tumor regions from CT scan slices, enabling potential applications in medical diagnostics and treatment planning.  

## 📌 Features  
- **Liver segmentation** with high accuracy  
- **Tumor detection** highlighted in red overlay  
- **Clean predictions** with minimal noise  
- Preprocessing and postprocessing pipeline for optimal results  
- Easily extendable for deployment and integration into clinical workflows  

## 🛠️ Tech Stack
### 🌐 Website
- **Frontend:** Next.js
- **Backend:** ExpressJS, Axios
- **API:** FastAPI
### 🧠 Model
- **Programming Language:** Python 
- **Deep Learning Framework:** TensorFlow 
- **Model Architecture:** U-Net
- **Image Processing:** OpenCV, NumPy 
- **Visualization:** Matplotlib  

## 🖼️ Example Predictions  

| Original Image | Liver Mask | Tumor Segmentation |
|---------------|------------|--------------------|
| ![original](images/sample1_original.jpg) | ![liver](images/sample1_liver.jpg) | ![tumor](images/sample1_tumor.jpg) |
| ![original](images/sample2_original.jpg) | ![liver](images/sample2_liver.jpg) | ![tumor](images/sample2_tumor.jpg) |

## 🚀 Installation & Usage  

### Clone the repository
```bash
git clone https://github.com/mystic-06/Liver-Segmentation-Model-Website.git
cd liver-tumor-segmentation-website
```

### Quick Start
#### Frontend Setup
```bash
# Navigate to Client directory
cd client

# Install dependencies
npm install

# Start the React application
npm run dev
```
#### General Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start the React application
npm run dev
```

#### Model Backend Setup
```bash
# Navigate to Model directory
cd api

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate
# Activate virtual environment (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload --port 8000 
```
## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributors
- Dhruv Sharma — Project Website
- Avish Choudhary — Model 
- Piyush Gupta — Model 



