export const ApplicationGrid = () => {
  const applications = [
    {
      name: "Gmail",
      icon: "/assets/images/apps/a01056c5417589299aa0d89ebf0bc5a348f52314.png",
      size: "large"
    },
    {
      name: "Sheets",
      icon: "/assets/images/apps/52292894569e7f37c0b69946ab8c5429e1f96307.png",
      size: "medium"
    },
    {
      name: "Slack",
      icon: "/assets/images/apps/4a6d122bf151006540d72aed54a840ca14f97db0.png",
      size: "large"
    },
    {
      name: "Trello",
      icon: "/assets/images/apps/9668aff77519f235c9c3134d731202f1fabcf0c1.png",
      size: "small"
    },
    {
      name: "HubSpot",
      icon: "/assets/images/apps/08e3fbd29ab7e16993b5eb35905fed2571c7a237.png",
      size: "medium"
    },
    {
      name: "Salesforce",
      icon: "/assets/images/apps/b91990337f3bd453ed083836bac9de6778e4cdbc.png",
      size: "large"
    },
    {
      name: "Stripe",
      icon: "/assets/images/apps/d37d441044f443f2ccda3f7116857ce26606aba2.png",
      size: "medium"
    },
    {
      name: "Facebook",
      icon: "/assets/images/apps/7d110ffe984cbef349fa3bb197ef8a85f9156fad.png",
      size: "medium"
    },
    {
      name: "Outlook",
      icon: "/assets/images/apps/39762a7e8f84d977bb6f8ae5e2c9fccd7d71efca.png",
      size: "medium"
    },
    {
      name: "Twitter",
      icon: "/assets/images/apps/aa3d554956506885c89ca86cc2dfca1f10ff997c.png",
      size: "medium"
    },
    {
      name: "Jira",
      icon: "/assets/images/apps/a75890ae5a96c2fde7b38cebc7c810fb6f395201.png",
      size: "small"
    },
    {
      name: "Microsoft Teams",
      icon: "/assets/images/apps/19221c3058ddd5f299c09e2f5da69fe75c8840d7.png",
      size: "small"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "w-20 h-20 lg:w-24 lg:h-24";
      case "medium":
        return "w-16 h-16 lg:w-20 lg:h-20";
      case "small":
        return "w-12 h-12 lg:w-16 lg:h-16";
      default:
        return "w-16 h-16 lg:w-20 lg:h-20";
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Floating Application Icons in a Creative Layout */}
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center min-h-[400px] lg:min-h-[500px]">
        {applications.map((app, index) => (
          <div
            key={app.name}
            className={`${getSizeClasses(app.size)} bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-2 hover:scale-110 cursor-pointer`}
            style={{
              transform: `translateY(${(index % 3) * 20 - 20}px) rotate(${(index % 5) * 2 - 4}deg)`,
              zIndex: applications.length - index
            }}
          >
            <img
              src={app.icon}
              alt={app.name}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Floating Animation Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-ethos-purple/10 to-ethos-purple-light/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-ethos-purple-light/10 to-ethos-purple/10 rounded-full blur-xl animate-pulse delay-300"></div>
      </div>
    </div>
  );
};
