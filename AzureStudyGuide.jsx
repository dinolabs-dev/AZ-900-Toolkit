import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight, BookOpen, Cloud, Shield, Settings, DollarSign } from 'lucide-react';

const AzureStudyGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const studyData = [
    {
      id: 'cloud-concepts',
      title: '☁️ 1. Cloud Concepts',
      icon: <Cloud className="w-5 h-5" />,
      color: 'bg-blue-50 border-blue-200',
      items: [
        {
          title: 'Azure Marketplace',
          keywords: 'third-party solutions, partner apps, VM images, SaaS offers, curated catalogue',
          concept: 'Pre-built solutions ready to deploy',
          details: 'Curated catalog of third-party solutions, partner apps, VM images and SaaS offerings'
        },
        {
          title: 'Azure Services',
          keywords: '200+ services, scalable, global, cloud-native',
          concept: 'Compute, Storage, Networking, AI, DevOps, and Security in one cloud',
          details: 'Over 200 scalable and global services for every business need'
        },
        {
          title: 'Azure Accounts',
          keywords: 'Microsoft account, Azure subscription, billing scope',
          concept: 'Account = Identity, Subscription = Billing',
          details: 'Hierarchical structure to manage identity and billing scopes'
        },
        {
          title: 'Cloud Models',
          keywords: 'Public: shared resources, Microsoft manages; Private: on-premises, full control; Hybrid: best of both',
          concept: 'Public (shared), Private (control), Hybrid (flexibility)',
          details: 'Three deployment models with different characteristics'
        },
        {
          title: 'Cloud Computing Advantages',
          keywords: 'scalability, elasticity, agility, high availability, disaster recovery',
          concept: 'Move fast, pay as you go, scale on demand',
          details: 'Scalability, elasticity, agility, high availability and disaster recovery'
        },
        {
          title: 'CapEx vs OpEx',
          keywords: 'CapEx: upfront investment, hardware; OpEx: pay-as-you-go',
          concept: 'Cloud = OpEx',
          details: 'Upfront investment vs recurring operational costs'
        },
        {
          title: 'Consumption-Based Model',
          keywords: 'pay for usage, no upfront cost, scale with need',
          concept: 'Like electricity bill',
          details: 'Pay only for what you use without upfront costs'
        },
        {
          title: 'Cloud Services',
          keywords: 'IaaS: user manages OS, VM; PaaS: user deploys apps; SaaS: fully managed',
          concept: 'IaaS (control), PaaS (app-focus), SaaS (productivity)',
          details: 'Three service levels with different degrees of management'
        },
        {
          title: 'Serverless Computing',
          keywords: 'auto-scale, event-driven, no infra management',
          concept: 'Pay per execution, like Functions & Logic Apps',
          details: 'Automatic scaling and event-driven management'
        }
      ]
    },
    {
      id: 'architecture',
      title: '🏗️ 2. Azure Architecture and Services',
      icon: <Settings className="w-5 h-5" />,
      color: 'bg-green-50 border-green-200',
      items: [
        {
          title: 'Regions, Availability Zones, Region Pairs',
          keywords: 'physical datacentres, fault-isolated, disaster recovery',
          concept: 'Geographic distribution for resilience',
          details: 'Regions with isolated zones and pairs for disaster recovery'
        },
        {
          title: 'Special Azure Regions',
          keywords: 'US Gov, China 21Vianet, Germany, compliance, isolation',
          concept: 'Compliance, isolation, local sovereignty',
          details: 'Dedicated regions for specific compliance requirements'
        },
        {
          title: 'Azure Resource Manager (ARM)',
          keywords: 'deployment engine, templates, consistent management, RBAC',
          concept: 'Declarative templates, RBAC, tagging, locking',
          details: 'Deployment engine for consistent resource management'
        },
        {
          title: 'Resource Groups',
          keywords: 'container for resources, lifecycle management',
          concept: 'Manage as a group (delete/lock/tag)',
          details: 'Logical containers for resource lifecycle management'
        },
        {
          title: 'Subscriptions',
          keywords: 'billing unit, isolation boundary, testing, separation',
          concept: 'Billing unit and isolation boundary',
          details: 'Boundaries for billing and workload separation'
        },
        {
          title: 'Management Groups',
          keywords: 'hierarchy over subscriptions, policies, RBAC org level',
          concept: 'Apply policies/RBAC at organization level',
          details: 'Hierarchy above subscriptions for enterprise governance'
        }
      ]
    },
    {
      id: 'compute',
      title: '💻 3. Azure Compute Services',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-purple-50 border-purple-200',
      items: [
        {
          title: 'Virtual Machines',
          keywords: 'IaaS, OS control, custom images, manual scaling',
          concept: 'Run anything, manual scaling',
          details: 'Full OS control with custom images'
        },
        {
          title: 'VM Scale Sets',
          keywords: 'auto-scale VMs, load-balanced, high-demand workloads',
          concept: 'High-demand workloads, same configuration',
          details: 'Auto-scaling VMs with load balancing'
        },
        {
          title: 'Containers & AKS',
          keywords: 'lightweight, portable apps, orchestration, scaling',
          concept: 'Lightweight portable apps with orchestration',
          details: 'Containerization with Kubernetes for advanced orchestration'
        },
        {
          title: 'Azure Virtual Desktop',
          keywords: 'desktop virtualization, remote access, Windows multi-session',
          concept: 'Remote desktop virtualization',
          details: 'Virtualized Windows desktops with remote access'
        },
        {
          title: 'App Service',
          keywords: 'PaaS, web apps, auto-scale, CI/CD support',
          concept: 'Web Apps, API Apps, Mobile Apps, Functions',
          details: 'Managed platform for web applications with CI/CD'
        },
        {
          title: 'Azure Functions',
          keywords: 'serverless, event-triggered code, micro-billing',
          concept: 'Serverless code with granular billing',
          details: 'Event-driven code execution without infrastructure management'
        },
        {
          title: 'Logic Apps',
          keywords: 'workflow automation, connectors, low-code',
          concept: 'Designer UI, integration-focused',
          details: 'Workflow automation with visual interface and connectors'
        }
      ]
    },
    {
      id: 'networking',
      title: '🌐 4. Networking Services',
      icon: <Cloud className="w-5 h-5" />,
      color: 'bg-cyan-50 border-cyan-200',
      items: [
        {
          title: 'Virtual Network',
          keywords: 'isolation, segmentation, private IPs',
          concept: 'Cloud LAN',
          details: 'Isolation and segmentation with private IPs'
        },
        {
          title: 'VNet Peering',
          keywords: 'connect VNets, intra-region, global',
          concept: 'Connect virtual networks',
          details: 'Connection between Virtual Networks in same region or globally'
        },
        {
          title: 'VPN Gateway',
          keywords: 'encrypted tunnel, site-to-site, point-to-site',
          concept: 'Encrypted secure tunnel',
          details: 'Secure VPN connections to on-premises environments'
        },
        {
          title: 'ExpressRoute',
          keywords: 'private fibre, no internet, low latency, mission-critical',
          concept: 'Private fibre for critical workloads',
          details: 'Dedicated private connection without going through internet'
        },
        {
          title: 'Network Security Groups (NSG)',
          keywords: 'inbound/outbound rules, subnet/nic level',
          concept: 'Firewall at subnet/network interface level',
          details: 'Security rules for inbound and outbound traffic'
        }
      ]
    },
    {
      id: 'storage',
      title: '💾 5. Azure Storage Services',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-orange-50 border-orange-200',
      items: [
        {
          title: 'Storage Account',
          keywords: 'Blob, File, Table, Queue storage types',
          concept: 'Four different storage types',
          details: 'Container account for different storage types'
        },
        {
          title: 'Blob Storage',
          keywords: 'unstructured data, containers, block/page blobs',
          concept: 'Unstructured data in containers',
          details: 'Object storage for unstructured data'
        },
        {
          title: 'Azure Files',
          keywords: 'SMB access, lift-and-shift, shared storage',
          concept: 'Shared storage with SMB access',
          details: 'Shared file system accessible via SMB protocol'
        },
        {
          title: 'Blob Access Tiers',
          keywords: 'Hot: frequent access, Cool: infrequent, Archive: rarely used',
          concept: 'Tiers based on access frequency',
          details: 'Cost optimization based on usage frequency'
        },
        {
          title: 'Disk Storage',
          keywords: 'OS disk, Data disk, Managed disk, Standard/Premium SSD',
          concept: 'Managed disks for VMs',
          details: 'Persistent storage for virtual machines with different performance levels'
        }
      ]
    },
    {
      id: 'monitoring',
      title: '📊 6. Monitoring & Management Tools',
      icon: <Settings className="w-5 h-5" />,
      color: 'bg-yellow-50 border-yellow-200',
      items: [
        {
          title: 'Azure Portal',
          keywords: 'browser UI, visual management',
          concept: 'Web interface for visual management',
          details: 'Primary web console for Azure management'
        },
        {
          title: 'Azure PowerShell / CLI',
          keywords: 'script-based automation, cross-platform',
          concept: 'Script-based automation',
          details: 'Command-line tools for automation and management'
        },
        {
          title: 'ARM Templates',
          keywords: 'JSON, declarative deployment, version control',
          concept: 'Declarative templates with version control',
          details: 'Infrastructure as code deployment in JSON format'
        },
        {
          title: 'Azure Advisor',
          keywords: 'recommendations, cost-saving',
          concept: 'Optimization recommendations',
          details: 'Personalized recommendations for performance, security and costs'
        },
        {
          title: 'Azure Monitor',
          keywords: 'metrics/logs, telemetry',
          concept: 'Centralized metrics and logs',
          details: 'Complete monitoring platform for applications and infrastructure'
        }
      ]
    },
    {
      id: 'security',
      title: '🛡️ 7. Security and Network Protection',
      icon: <Shield className="w-5 h-5" />,
      color: 'bg-red-50 border-red-200',
      items: [
        {
          title: 'Defense in Depth',
          keywords: 'Physical, Perimeter, Network, Compute, App, Data layers',
          concept: 'Multi-layered security',
          details: 'Layered security approach across six levels'
        },
        {
          title: 'Azure Firewall',
          keywords: 'stateful, FQDN rules, logging',
          concept: 'Managed firewall with FQDN rules',
          details: 'Fully managed, stateful network firewall'
        },
        {
          title: 'DDoS Protection',
          keywords: 'Basic: free, Standard: mitigation, telemetry, SLA',
          concept: 'Free basic or advanced standard protection',
          details: 'Distributed attack protection with two service levels'
        },
        {
          title: 'Azure Active Directory',
          keywords: 'identity provider, SSO, MFA, B2B, B2C',
          concept: 'Identity provider with SSO and MFA',
          details: 'Cloud-native identity and access management service'
        },
        {
          title: 'Conditional Access',
          keywords: 'if-then policies, risky login control',
          concept: 'If-then policies for risky access control',
          details: 'Granular access control based on conditions'
        }
      ]
    },
    {
      id: 'governance',
      title: '⚖️ 8. Azure Governance',
      icon: <Settings className="w-5 h-5" />,
      color: 'bg-indigo-50 border-indigo-200',
      items: [
        {
          title: 'RBAC (Role-Based Access Control)',
          keywords: 'assign roles, different scopes, least privilege',
          concept: 'Roles assigned with least privilege principle',
          details: 'Role-based access control at different scope levels'
        },
        {
          title: 'Resource Locks',
          keywords: 'Read-only, Delete lock, prevent accidental deletion',
          concept: 'Prevent accidental deletion/changes',
          details: 'Locks to protect critical resources from unauthorized changes'
        },
        {
          title: 'Tags',
          keywords: 'metadata, organize billing/resources',
          concept: 'Metadata for organization and billing',
          details: 'Labels to categorize and organize resources'
        },
        {
          title: 'Azure Policy',
          keywords: 'compliance rules, enforce standards, initiatives',
          concept: 'Compliance rules and enforced standards',
          details: 'Definition and enforcement of enterprise standards'
        },
        {
          title: 'Azure Blueprints',
          keywords: 'package templates, RBAC, policy, compliance setup',
          concept: 'Template package for compliance setup',
          details: 'Repeatable definitions for standards-compliant environments'
        }
      ]
    },
    {
      id: 'cost-management',
      title: '💰 9. Cost Management & SLAs',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'bg-emerald-50 border-emerald-200',
      items: [
        {
          title: 'Cost Factors',
          keywords: 'region, VM size, storage, bandwidth, license',
          concept: 'Region, VM size, storage, bandwidth, licenses',
          details: 'Elements that influence total cost of ownership'
        },
        {
          title: 'Pricing Calculator',
          keywords: 'estimate cost, pre-deployment planning',
          concept: 'Estimate costs before deployment',
          details: 'Tool to calculate estimated costs of Azure resources'
        },
        {
          title: 'Azure Reservations',
          keywords: '1-year/3-year prepay, cost saving, steady workloads',
          concept: '1-3 year prepayment for steady workloads',
          details: 'Significant discounts for long-term commitments'
        },
        {
          title: 'Spending Limits',
          keywords: 'prevent overages, free tier',
          concept: 'Prevent overages (often free tier)',
          details: 'Controls to avoid unexpected expenses'
        },
        {
          title: 'SLA (Service Level Agreements)',
          keywords: 'uptime guarantee, availability %, composite SLA',
          concept: 'Uptime and availability guarantees',
          details: 'Service level agreements with availability guarantees'
        }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return studyData;
    
    return studyData.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.details.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.items.length > 0);
  }, [searchTerm]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Azure Fundamentals (AZ-900)
        </h1>
        <p className="text-center text-gray-600 mb-6">Interactive Study Guide</p>
        
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search concepts, keywords..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredData.map((section) => (
          <div key={section.id} className={`border-2 rounded-lg ${section.color} shadow-sm`}>
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                <span className="bg-white/70 px-2 py-1 rounded-full text-sm font-medium">
                  {section.items.length} items
                </span>
              </div>
              {expandedSections[section.id] ? (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="px-6 pb-4 space-y-4">
                {section.items.map((item, index) => (
                  <div key={index} className="bg-white/70 rounded-lg p-4 border border-white/50">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-blue-700">💭 Key Concept: </span>
                        <span className="text-gray-700">{item.concept}</span>
                      </div>
                      <div>
                        <span className="font-medium text-green-700">🔑 Keywords: </span>
                        <span className="text-gray-600 italic">{item.keywords}</span>
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">📝 Details: </span>
                        <span className="text-gray-700">{item.details}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
          <p className="text-gray-400">Try different search terms</p>
        </div>
      )}

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>💡 Tip: Use search to quickly find specific concepts</p>
        <p>📚 Click on sections to expand and study in detail</p>
      </div>
    </div>
  );
};

export default AzureStudyGuide;