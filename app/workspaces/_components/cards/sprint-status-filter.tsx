// src/Board.tsx
import React from 'react';
import { User,  DiscAlbum } from 'lucide-react';

/*
    Author: Ramshija.k.k on June 6th, 2024
    Purpose:To filter the issues in sprints based on status ToDo,InProgress,Completed etc. */

interface Issue {
  id: string;
  title: string;
  status: 'TO DO' | 'IN PROGRESS' | 'COMPLETED'|'PR CREATED'|'QA PASSED'|'BRANCH MERGED';
}

const issues: Issue[] = [
  { id: 'SBA-45', title: 'issue4', status: 'TO DO' },
  { id: 'SBA-46', title: 'issue5', status: 'TO DO' },
  { id: 'SBA-47', title: 'issue6', status: 'TO DO' },
  { id: 'SBA-43', title: 'issue2', status: 'IN PROGRESS' },
  { id: 'SBA-44', title: 'issue3', status: 'IN PROGRESS' },
  { id: 'SBA-42', title: 'issue1', status: 'COMPLETED' },
  { id: 'SBA-49', title: 'issue9', status: 'PR CREATED' },
  { id: 'SBA-39', title: 'issue10', status: 'QA PASSED' },
  { id: 'SBA-34', title: 'issue31', status: 'BRANCH MERGED' },
  { id: 'SBA-32', title: 'issue11', status: 'BRANCH MERGED' },
];

 export const Board: React.FC = () => {
    const renderIssues = (status: 'TO DO' | 'IN PROGRESS' | 'COMPLETED'|'PR CREATED'|'QA PASSED'|'BRANCH MERGED') => {
    return issues.filter(issue => issue.status === status).map(issue => (
      <div key={issue.id} className="bg-white p-4 rounded-lg shadow mb-2 flex justify-between items-center">
        <div>
          <div className="text-lg font-bold">{issue.title}</div>
          <div className="text-sm text-gray-500 flex items-center">
            <DiscAlbum className="w-5 h-5 mr-2 text-gray-500" />
            {issue.id}
          </div>
        </div>
        <div className="text-gray-500">
          <User className="w-6 h-6" />
        </div>
      </div>
    ));
  };

  return (
    <div className="flex space-x-4 p-4">
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow border border-gray-300">
        <h2 className="text-xl font-bold mb-2">TO DO</h2>
        {renderIssues('TO DO')}
      </div>
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow border border-gray-300">
        <h2 className="text-xl font-bold mb-2">IN PROGRESS</h2>
        {renderIssues('IN PROGRESS')}
      </div>
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow border border-gray-300">
        <h2 className="text-xl font-bold mb-2">COMPLETED</h2>
        {renderIssues('COMPLETED')}
      </div>
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow border border-gray-300">
        <h2 className="text-xl font-bold mb-2">PR CREATED</h2>
        {renderIssues('PR CREATED')}
      </div>
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow border border-gray-300">
        <h2 className="text-xl font-bold mb-2">QA PASSED</h2>
        {renderIssues('QA PASSED')}
      </div>
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow border border-gray-300">
        <h2 className="text-xl font-bold mb-2">BRANCH MERGED</h2>
        {renderIssues('BRANCH MERGED')}
      </div>
    </div>
  );
};


