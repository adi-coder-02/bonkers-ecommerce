import React from 'react';
import { RefreshCw, CheckCircle, Headphones } from 'lucide-react';

const OurPolicy = () => {
  const policies = [
    {
      icon: <RefreshCw className="w-12 h-12 text-gray-700" />,
      title: "Easy Exchange Policy",
      description: "We offer hassle free exchange policy"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-gray-700" />,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy"
    },
    {
      icon: <Headphones className="w-12 h-12 text-gray-700" />,
      title: "Best customer support",
      description: "we provide 24/7 customer support"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {policy.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {policy.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;