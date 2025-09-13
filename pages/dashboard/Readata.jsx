import { Card, CardAction, CardContent, CardHeader, CardFooter, CardDescription, CardTitle } from '../../src/components/ui/card'
import { Progress } from "@/components/ui/progress"
export default function
    (params) {
    const title = ["Soil Moisture", "Temperature", "Humidity", "Wind",]
    return (
        <div className="justify-center grid ">

        <div className="rounded min-w-fit p-12 border-1">
            <h1>
                System Status:Active </h1>
        <div className=" grid grid-cols-2 w-auto gap-2 ">
            <Card >
                    <CardTitle>Soil Moisture</CardTitle>
                <CardAction>
                    <CardDescription>56%</CardDescription>
                    <CardContent>
                        optimal
                    </CardContent>
                </CardAction>
                    <CardContent><Progress value={50}/></CardContent>
            </Card>
            <Card>
              
                <CardTitle>Temparature</CardTitle>
                <CardAction>
                    <CardDescription>56%</CardDescription>
                    <CardContent>
                        high
                    </CardContent>
                </CardAction>
                    <CardContent><Progress value={50}/></CardContent>
            </Card> <Card>
                
                    <CardTitle>Humidity</CardTitle>
                <CardAction>
                    <CardDescription>56%</CardDescription>
                    <CardContent>
                        normal
                    </CardContent>
                </CardAction>
                    <CardContent><Progress value={50}/></CardContent>
            </Card> <Card>
                
                    <CardTitle>Wind</CardTitle>
                <CardAction>
                    <CardDescription>12%</CardDescription>
                    <CardContent>
                        low
                    </CardContent>
                </CardAction>
                    <CardContent ><Progress value={12}  className="w-full"/></CardContent>
            </Card>
        </div>
        </div>
        </div>

    )
};
