import { exec } from "child_process";
import { injectable } from "tsyringe";
import { promisify } from "util";
import { resolve } from "path";
import fs from "fs";

interface IRequest {
    ghHttp: string;
    commitText: string;
}

const runCommand = promisify(exec); 

@injectable()
class CreateGhCommandUseCase {
    async execute({ ghHttp, commitText } : IRequest): Promise<void> {
        //await runCommand('git init')

        fs.writeFile(resolve(__dirname, "..", "..", "..", ".gitignore"), "node_modules", (err) => {
            if (err) {
                console.log("Error created file.")
            }
            console.log(".gitignore criated.")
        })

        await runCommand('git add .')

        console.log("git add...")

        await runCommand(`git commit -m "${commitText}"`)

        console.log(`git commit -m "${commitText}"`)

        await runCommand("git branch -M main")

        //await runCommand(`git remote add origin ${ghHttp}`)

        await runCommand(`git push -u origin main`)

        console.log(`git push -u origin main`)

        console.log("Commit and push done.")
    }
}

export { CreateGhCommandUseCase };