"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
// import { Progress } from "@/components/ui/progress" //Removed as Progress component is no longer used

interface ProjectDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    goal: number;
    raised: number;
    daysLeft: number;
  };
}

export default function ProjectDetailsDialog({
  isOpen,
  onClose,
  project,
}: ProjectDetailsDialogProps) {
  const progress = (project.raised / project.goal) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] bg-white/10 backdrop-blur-sm border-white/20">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Funding Progress</h4>
          <div className="w-full bg-white rounded-full h-2.5 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{project.raised} ETH raised</span>
            <span>{project.goal} ETH goal</span>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium">Time Remaining</h4>
          <p>{project.daysLeft} days left</p>
        </div>
        {/* Add more project details here as needed */}
      </DialogContent>
    </Dialog>
  );
}
