import React,{useState} from 'react';
import Axios from "axios";

const ContexualAdd = () => {

    const [file, setFile] = useState();
    
    const uploadChunks = () =>{
        const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData };
        })
        .map(({ formData }) =>
            Axios.post(`${process.env.REACT_APP_SERVER_URL}/contextual/addVideo`, {data:container})
        );
    }

    // const request = () => {
    //    Axios.post(`${process.env.REACT_APP_SERVER_URL}/contextual/addVideo`, {container});
    //     requestList
    //    {
    //     return new Promise(resolve => {
    //       const xhr = new XMLHttpRequest();
    //       xhr.open(method, url);
    //       Object.keys(headers).forEach(key =>
    //         xhr.setRequestHeader(key, headers[key])
    //       );
    //       xhr.send(data);
    //       xhr.onload = e => {
    //         resolve({
    //           data: e.target.response
    //         });
    //       };
    //     });
    //   }

    const handleUpload = (event) =>{
        event.preventDefault();
        const url =`${process.env.REACT_APP_SERVER_URL}/contextual/addVideo`;
        const formData = new FormData();
        formData.append("chunk", chunk);
        formData.append("hash", hash);
        formData.append('fileName', file.name);
        formData.append("filename", this.container.file.name);
        // return { formData };
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };
        Axios.post(url, formData, config).then((response) => {
        console.log(response.data);
        });
    }

    const handleFileChange = (e) => {
        const [file] = e.target.files;
        console.log(file);
        if (!file) return;
        setFile(file);
    }
    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Add Video</button>
        </div>
    )
}

export default ContexualAdd

// const resolvePost = req =>
//     new Promise(resolve => {
//         let chunk = "";
//         req.on("data", data => {
//             chunk += data;
//         });
//         req.on("end", () => {
//             resolve(JSON.parse(chunk));
//         });
//     });



// const pipeStream = (path, writeStream) => {
//     new Promise(resolve => {
//         const readStream = fse.createReadStream(path);
//         readStream.on("end", () => {
//             fse.unlinkSync(path);
//             resolve();
//         });
//         readStream.pipe(writeStream);
//     });
// }



// const mergeFileChunk = async (filePath, filename, size) => {
//     const chunkDir = path.resolve(UPLOAD_DIR, 'chunkDir' + filename);
//     const chunkPaths = await fse.readdir(chunkDir);
//     // sort by chunk index
//     // otherwise, the order of reading the directory may be wrong
//     chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
//     // write file concurrently
//     await Promise.all(
//         chunkPaths.map((chunkPath, index) =>
//             pipeStream(
//                 path.resolve(chunkDir, chunkPath),
//                 // create write stream at the specified starting location according to size
//                 fse.createWriteStream(filePath, {
//                     start: index * size,
//                 })
//             )
//         )
//     );
//     // delete chunk directory after merging
//     fse.rmdirSync(chunkDir);
// };
