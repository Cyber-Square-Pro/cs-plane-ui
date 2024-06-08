"use client"
import EmptyPageCreate from "@/components/modal/create-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from 'react';


const AllIssuesTabs = () => {
    const [activeTab, setActiveTab] = useState('all-issues');
    console.log(activeTab);
    
    const handleTabClick = (value:string) => { //function literal
        setActiveTab(value);
      };
  return (
    <div className="h-[2.75rem] border-b p-2">
      <Tabs defaultValue="all-issues" className="w-[1500px]">
        <TabsList>
          <TabsTrigger 
                value="all-issues"
                className={cn("text-zinc-800", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "all-issues", } )}
                onClick= {() => {setActiveTab("all-issues")}}
                style={{ animation: 'none' }}
                >All Issues
          </TabsTrigger>

          <TabsTrigger 
                value="assigned" 
                onClick= {() => {setActiveTab("assigned")}}
                className={cn("text-black", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "assigned"} )}
                >Assigned
          </TabsTrigger>

          <TabsTrigger 
                value="created" 
                onClick= {() => {setActiveTab("created")}}
                className={cn(" text-black", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "created", } )}
                >Created
          </TabsTrigger>

          <TabsTrigger 
                value="subscribed" 
                onClick= {() => {setActiveTab("subscribed")}}
                className={cn(" text-black", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "subscribed", } )}>
                Subscribed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all-issues">
          <div>
            <EmptyPageCreate
                modalHeading ="No issues in the project" 
                modalText ="First project done! Now, slice your work into trackable pieces
                with issues. Let's go!"
                modalImg="/empty-state/issues-light.webp"
                btnText ="Create New Issue" 
            />
          </div>          
        </TabsContent>
        <TabsContent value="assigned">Assigned</TabsContent>
        <TabsContent value="created">Created</TabsContent>
        <TabsContent value="subscribed">Subscribed</TabsContent>
      </Tabs>
    </div>
  );
};

export default AllIssuesTabs;
