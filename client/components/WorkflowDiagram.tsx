export const WorkflowDiagram = () => {
  return (
    <div className="relative bg-white rounded-3xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto">
      {/* Workflow Steps */}
      <div className="flex flex-col items-center space-y-8">
        {/* Step 1: Webhook */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4">
            <img
              src="/assets/images/workflow/083c30391c2df8b29d47092148f52f261935dd5a.png"
              alt="Webhook"
              className="w-16 h-16"
            />
          </div>
          <p className="text-gray-700 text-sm font-semibold text-center">Webhook</p>
        </div>

        {/* Arrow Down */}
        <div className="w-0 h-12 border-l-2 border-purple-500"></div>

        {/* Step 2: AI Agent */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-24 bg-white rounded-3xl shadow-md flex items-center justify-center mb-4">
            <img
              src="/assets/images/workflow/13855b7a8273781d9f25b58a218564e54381bc18.png"
              alt="AI Agent"
              className="w-10 h-10 mr-3"
            />
            <span className="text-black text-sm font-semibold">Your AI Agent</span>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="w-0 h-12 border-l-2 border-purple-500"></div>

        {/* Step 3: Response */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4">
            <img
              src="/assets/images/workflow/083c30391c2df8b29d47092148f52f261935dd5a.png"
              alt="Response Webhook"
              className="w-16 h-16"
            />
          </div>
          <p className="text-gray-700 text-sm font-semibold text-center">
            Response to the Webhook
          </p>
        </div>

        {/* Arrow Down */}
        <div className="w-0 h-12 border-l-2 border-purple-500"></div>

        {/* Step 4: Additional Workflow */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-4">
            <span className="text-gray-700 text-2xl font-bold">+</span>
          </div>
          <p className="text-gray-700 text-sm font-semibold text-center">
            Open to Trigger<br />another workflow
          </p>
        </div>
      </div>

      {/* Side Elements */}
      <div className="absolute top-8 left-8 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="/assets/images/workflow/c70dfe2ca91c5daaf0b6b066c3bf5a9e786c644c.png"
              alt="ChatGPT"
              className="w-8 h-8"
            />
          </div>
          <span className="text-gray-700 text-xs font-semibold">Chat GPT or any LLM</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="/assets/images/workflow/c28171ed34bf51416803eb53aee265bfc16565c5.png"
              alt="Memory"
              className="w-8 h-8"
            />
          </div>
          <span className="text-gray-700 text-xs font-semibold">Simple Memory</span>
        </div>
      </div>

      <div className="absolute top-8 right-8 space-y-4">
        <span className="text-gray-700 text-xs font-semibold block">Productivity Tools</span>
        <span className="text-gray-700 text-xs font-semibold block">Financial Tools</span>
        <span className="text-gray-700 text-xs font-semibold block">Communication Tools</span>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="/assets/images/workflow/c28171ed34bf51416803eb53aee265bfc16565c5.png"
              alt="Contacts"
              className="w-8 h-8"
            />
          </div>
          <span className="text-gray-700 text-xs font-semibold">Contacts Data</span>
        </div>
      </div>
    </div>
  );
};
