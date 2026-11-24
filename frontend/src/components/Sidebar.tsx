import { Plus, MessageSquare, Settings, Sparkles } from "lucide-react";

interface SidebarProps {
  onNewChat: () => void;
}

export default function Sidebar({ onNewChat }: SidebarProps) {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-gray-50 p-4">

      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
          <Sparkles size={20} />
        </div>

        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          Cognify
        </h1>
      </div>

      <button
        onClick={onNewChat}
        className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-violet-700"
      >
        <Plus size={18} />
        New chat
      </button>

      <div className="mt-8 flex-1">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Workspace
        </p>

        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500">
          <MessageSquare size={17} />
          Your conversations
        </div>
      </div>

      <button className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-600 transition hover:bg-gray-200">
        <Settings size={18} />
        Settings
      </button>

      <div className="mt-3 border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-400">
          Cognify AI Assistant
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Version 1.0.0
        </p>
      </div>

    </aside>
  );
}