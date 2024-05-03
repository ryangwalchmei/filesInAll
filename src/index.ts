import fs from 'fs';
import { opendir } from 'fs/promises';
import paths from './hosts.json';

let filesInDirectoryLocal: Array<string> = [];
let filesCopyed = 0;

async function Main() {
    console.log("[ ] Starting file shares for hosts...");

    analizeFilesOnFolder().then(() => {
        console.log("[ ] Analyzing files to be shared...");

        paths.hosts.map(host => {
            filesInDirectoryLocal.map(file => {
                copyFileOnDirectory(file, host);
            });
        });
    })
};

const analizeFilesOnFolder = async () => {
    try {
        const dir = await opendir('./filesOnDirect');
        for await (const dirent of dir) {
            filesInDirectoryLocal.push(dirent.name)
        }
    } catch (err) {
        console.error(err);
    };
};

const copyFileOnDirectory = async (file: string, path: string) => {
    try {
        fs.copyFile(`filesOnDirect\\${file}`, `\\\\${path}\\Desk\\${file}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`[${path}] - ${file} - Pasted with sucessfully`);
            filesCopyed += 1;

        });

    } catch (error) {
        console.log(error);
    };
};

Main().then(() => {
    console.log(filesCopyed);
});