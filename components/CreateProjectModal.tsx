"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CreateProjectModalProps {
  onProjectCreated: (project: {
    id: string;
    title: string;
    description: string;
    goal: number;
    raised: number;
    daysLeft: number;
  }) => void;
}

export default function CreateProjectModal({
  onProjectCreated,
}: CreateProjectModalProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now().toString(),
      title,
      description,
      goal: parseFloat(goal),
      raised: 0,
      daysLeft: parseInt(duration),
    };
    onProjectCreated(newProject);
    setOpen(false);
    // Reset form
    setTitle("");
    setDescription("");
    setGoal("");
    setDuration("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
          Create Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/10 backdrop-blur-lg border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white">Create New Project</DialogTitle>
          <DialogDescription className="text-white">
            Fill in the details to create a new crowdfunding project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right text-white">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3 bg-white/10 backdrop-blur-sm border-white/20"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right text-white">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3 bg-white/10 backdrop-blur-sm border-white/20"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="goal" className="text-right text-white">
                Goal (XION)
              </Label>
              <Input
                id="goal"
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="col-span-3 bg-white/10 backdrop-blur-sm border-white/20"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right text-white">
                Duration (days)
              </Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="col-span-3 bg-white/10 backdrop-blur-sm border-white/20"
                min="1"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              Create Project
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
