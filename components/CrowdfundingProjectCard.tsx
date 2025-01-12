import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CrowdfundingProjectCardProps {
  id: string
  title: string
  description: string
  goal: number
  raised: number
  daysLeft: number
  onFund: (id: string) => void
  onDetails: (id: string) => void
}

export default function CrowdfundingProjectCard({ 
  id, 
  title, 
  description, 
  goal, 
  raised, 
  daysLeft, 
  onFund, 
  onDetails 
}: CrowdfundingProjectCardProps) {
  const progress = (raised / goal) * 100

  return (
    <Card className="w-full bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle>
          <button 
            onClick={() => onDetails(id)} 
            className="text-left hover:text-blue-400 transition-colors"
          >
            {title}
          </button>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="w-full bg-white rounded-full h-2.5 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{raised} ETH raised</span>
            <span>{goal} ETH goal</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          onClick={() => onFund(id)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
        >
          Fund Project
        </Button>
        <span className="text-sm text-muted-foreground">{daysLeft} days left</span>
      </CardFooter>
    </Card>
  )
}

