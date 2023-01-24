import { ServicesClass } from "../utils";

export const Postrequest = (path: any, params: any, header?: any) => {
  const request = new ServicesClass(header);
  return new Promise(async (resolve: any, reject: any) => {
    try {
      const { data } = await request.post(path, params);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
