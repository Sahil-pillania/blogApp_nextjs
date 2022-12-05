// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    // console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    //console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);

  // fsreaddir("blogdata", (err, data) => {

  //   console.log(data);
  //   let allBlogs = [];
  //   data.forEach((item) => {
  //     console.log(item);
  //     fs.readFile("blogdata/" + item, (d) => {
  //       allBlogs.push(d);
  //     });
  //   });

  //   res.status(200).json(data);
  // });
}
