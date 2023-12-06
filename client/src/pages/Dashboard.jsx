import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export default function Dashboard() {
  const [file, setFile] = useState(undefined);
  const [formData, setFormData] = useState({});

  console.log(formData);
  useEffect(() => {
    if (file) {
      handleImage(file);
    }
  }, [file]);

  const handleImage = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadeTask = uploadBytesResumable(storageRef, file);

    uploadeTask.on(
      "state_changed",
      (snapshot) => {
        const prograss =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(Math.round(prograss));
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadeTask.snapshot.ref).then((downloadeUrl) =>
          setFormData({ ...formData, image: downloadeUrl })
        );
      }
    );
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/project/create`, formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" max-w-2xl mx-auto shadow-2xl h-[600px]">
      <h2 className=" text-2xl font-bold text-slate-700 text-center mt-5">
        Uploade Your Project
      </h2>
      <div className=" mt-10">
        <form
          onSubmit={handleSumbit}
          className=" flex flex-col items-center justify-center gap-5">
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className=" w-full border-b-2 outline-none p-2"
            type="text"
            placeholder="Name"
          />
          <div className=" flex items-center w-full border p-2 gap-2">
            <img
              className=" w-[200px] h-[100px] rounded-lg object-cover"
              src={formData.image}
              alt="image"
            />
            <input
              className=" border border-slate-800 p-3 w-full"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button className=" text-xl font-semibold uppercase bg-green-700 text-white p-2 rounded-2xl hover:opacity-90">
            uploade
          </button>
        </form>
      </div>
    </div>
  );
}
