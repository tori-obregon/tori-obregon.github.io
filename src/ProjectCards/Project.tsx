import React from "react";
import './ProjectContainer.css';

export function ProjectCard() {
  return (
    <div className="projectCard">
      <h2 className="projectTitle" >Project 1</h2>
      <h2 className="projectDescription" >Description</h2>
    </div>
    // <Card className=" sm:grid-cols-2">
    //   <CardHeader>
    //     <CardTitle>Project 1</CardTitle>
    //     <CardDescription>Description</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //    <p className="text-slate-400 font-semibold ">Content</p>
    //   </CardContent>
    //   <CardFooter className="flex justify-between">
    //   </CardFooter>
    // </Card>
  )
}