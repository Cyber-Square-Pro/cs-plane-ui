
import React from 'react';
import { LucideFolderPlus, LucideLayers, LucidePlane, LucideSettings, Search, MessageCircle, LucideIcon, FileText, Bug, X } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { useMobxStore } from '@/store/store.provider';
/*
Author: Ramshija.k.k on June 26th, 2024
Purpose: Renders search button modal  
*/

export const SearchModal: React.FC = () => {
  const { commandPalette: commandPaletteStore } = useMobxStore();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 cursor-default">
      <div className="modal-overlay fixed inset-0 bg-black opacity-20"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="bg-white w-full md:w-1/2 lg:w-2/3 xl:w-1/2 h-2/3 mx-auto rounded-lg shadow-lg p-2 bg-slate-100 overflow-y-scroll vertical-scrollbar pointer-events-auto relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => commandPaletteStore.toggleSearchModal(false)}
          >
            <X className="w-5 h-5" />
          </button>
          <form>
            <div className="flex items-center">
              <Search className="h-4 w-4 ml-2" />
              <input
                type="text"
                placeholder="Type a command or Search..."
                className="w-full px-4 py-2 border-l-1 border-gray-300 border-b-2 focus:outline-none"
              />
            </div>

            <h4 className="mb-4 ml-2">Issue</h4>
            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <LucideLayers className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Create new issues</a>
            </div>

            <br className="mt-2" />
            <h4 className="mb-4 ml-2">Project</h4>
            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <LucideFolderPlus className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Create new project</a>
            </div>

            <br className="mt-2" />
            <h4 className="mb-4 ml-2">Workspace settings</h4>
            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <LucideSettings className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Search settings...</a>
            </div>

            <br className="mt-2" />
            <h4 className="mb-4 ml-2">Account</h4>
            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <LucideFolderPlus className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Create new workspace</a>
            </div>
            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <LucideSettings className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Change interface theme...</a>
            </div>

            <br className="mt-2" />
            <h1 className="mb-4 ml-2">Help</h1>
            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <LucidePlane className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Open keyboard shortcuts</a>
            </div>

            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <FileText className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Open plane documentation</a>
            </div>

            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <Bug className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Report a bug</a>
            </div>

            <div className="flex items-center hover:bg-gray-200 rounded ml-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              <a href="#" className="text-black-500">Chat with us</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
