import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, X, Loader, Lock, Globe, Server, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SecurityCheck {
  id: string;
  name: string;
  category: 'network' | 'application' | 'data' | 'infrastructure';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'scanning' | 'passed' | 'failed' | 'warning';
  description: string;
  recommendation?: string;
  impact?: string;
}

interface ScanResult {
  overallScore: number;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  warningChecks: number;
  checks: SecurityCheck[];
  scanDuration: number;
  lastScanDate: string;
}

interface SecurityScannerProps {
  title?: string;
  description?: string;
  onScanComplete?: (result: ScanResult) => void;
  onEmailCapture?: (email: string, result: ScanResult) => void;
  className?: string;
}

const defaultSecurityChecks: SecurityCheck[] = [
  {
    id: 'ssl-cert',
    name: 'SSL Certificate Validation',
    category: 'network',
    severity: 'high',
    status: 'pending',
    description: 'Validates SSL certificate configuration and expiration',
    recommendation: 'Ensure SSL certificate is valid and properly configured',
    impact: 'Prevents data interception and builds user trust'
  },
  {
    id: 'sql-injection',
    name: 'SQL Injection Vulnerability',
    category: 'application',
    severity: 'critical',
    status: 'pending',
    description: 'Scans for SQL injection vulnerabilities in web applications',
    recommendation: 'Use parameterized queries and input validation',
    impact: 'Prevents unauthorized database access and data breaches'
  },
  {
    id: 'xss-protection',
    name: 'Cross-Site Scripting (XSS)',
    category: 'application',
    severity: 'high',
    status: 'pending',
    description: 'Checks for XSS vulnerabilities in user input handling',
    recommendation: 'Implement proper input sanitization and CSP headers',
    impact: 'Prevents malicious script execution and session hijacking'
  },
  {
    id: 'data-encryption',
    name: 'Data Encryption at Rest',
    category: 'data',
    severity: 'high',
    status: 'pending',
    description: 'Verifies that sensitive data is encrypted in storage',
    recommendation: 'Implement AES-256 encryption for sensitive data',
    impact: 'Protects data even if storage is compromised'
  },
  {
    id: 'access-controls',
    name: 'Access Control Configuration',
    category: 'infrastructure',
    severity: 'medium',
    status: 'pending',
    description: 'Reviews user access controls and permissions',
    recommendation: 'Implement principle of least privilege',
    impact: 'Reduces risk of unauthorized access and data exposure'
  },
  {
    id: 'backup-security',
    name: 'Backup Security Assessment',
    category: 'data',
    severity: 'medium',
    status: 'pending',
    description: 'Evaluates backup encryption and access controls',
    recommendation: 'Encrypt backups and test restoration procedures',
    impact: 'Ensures business continuity and data recovery capabilities'
  }
];

export const SecurityScanner: React.FC<SecurityScannerProps> = ({
  title = "Free Security Assessment",
  description = "Get a comprehensive security scan of your digital infrastructure",
  onScanComplete,
  onEmailCapture,
  className = ""
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [currentCheck, setCurrentCheck] = useState<string>('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

  const startScan = async () => {
    if (!websiteUrl) return;

    setIsScanning(true);
    setScanResult(null);
    setCurrentCheck('');

    const checks = [...defaultSecurityChecks];
    const startTime = Date.now();

    // Simulate scanning process
    for (let i = 0; i < checks.length; i++) {
      const check = checks[i];
      setCurrentCheck(check.name);
      
      // Simulate scan time
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      // Simulate results (in real implementation, this would call actual security APIs)
      const outcomes = ['passed', 'failed', 'warning'] as const;
      const weights = check.severity === 'critical' ? [0.3, 0.5, 0.2] : 
                    check.severity === 'high' ? [0.5, 0.3, 0.2] :
                    check.severity === 'medium' ? [0.7, 0.2, 0.1] : [0.8, 0.1, 0.1];
      
      const random = Math.random();
      let outcome: typeof outcomes[number] = 'passed';
      let cumulative = 0;
      for (let j = 0; j < outcomes.length; j++) {
        cumulative += weights[j];
        if (random <= cumulative) {
          outcome = outcomes[j];
          break;
        }
      }
      
      checks[i] = { ...check, status: outcome };
    }

    const endTime = Date.now();
    const scanDuration = Math.round((endTime - startTime) / 1000);
    
    const passedChecks = checks.filter(c => c.status === 'passed').length;
    const failedChecks = checks.filter(c => c.status === 'failed').length;
    const warningChecks = checks.filter(c => c.status === 'warning').length;
    
    // Calculate overall score
    const overallScore = Math.round((passedChecks / checks.length) * 100);

    const result: ScanResult = {
      overallScore,
      totalChecks: checks.length,
      passedChecks,
      failedChecks,
      warningChecks,
      checks,
      scanDuration,
      lastScanDate: new Date().toISOString()
    };

    setScanResult(result);
    setIsScanning(false);
    setCurrentCheck('');

    if (onScanComplete) {
      onScanComplete(result);
    }

    // Show email capture for detailed report
    if (failedChecks > 0 || warningChecks > 0) {
      setShowEmailCapture(true);
    }
  };

  const handleEmailSubmit = () => {
    if (email && scanResult && onEmailCapture) {
      onEmailCapture(email, scanResult);
      setShowEmailCapture(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'network':
        return <Globe className="w-4 h-4" />;
      case 'application':
        return <Shield className="w-4 h-4" />;
      case 'data':
        return <Database className="w-4 h-4" />;
      case 'infrastructure':
        return <Server className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'failed':
        return <X className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'scanning':
        return <Loader className="w-5 h-5 text-blue-600 animate-spin" />;
      default:
        return <div className="w-5 h-5 bg-gray-300 rounded-full" />;
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-ethos-purple mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy">
              {title}
            </h2>
          </div>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Scan Input */}
        {!scanResult && (
          <Card className="p-6 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ethos-navy mb-2">
                  Website URL to Scan
                </label>
                <input
                  type="url"
                  placeholder="https://your-website.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethos-purple focus:border-ethos-purple"
                  disabled={isScanning}
                />
              </div>
              <Button
                onClick={startScan}
                disabled={!websiteUrl || isScanning}
                className="w-full bg-ethos-purple hover:bg-ethos-purple/90"
                size="lg"
              >
                {isScanning ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" />
                    Start Security Scan
                  </>
                )}
              </Button>
            </div>
          </Card>
        )}

        {/* Scanning Progress */}
        {isScanning && (
          <Card className="p-6 mb-8">
            <div className="text-center">
              <Loader className="w-12 h-12 text-ethos-purple mx-auto mb-4 animate-spin" />
              <h3 className="text-lg font-semibold text-ethos-navy mb-2">
                Security Scan in Progress
              </h3>
              <p className="text-ethos-gray mb-4">
                Currently checking: {currentCheck}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-ethos-purple h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(defaultSecurityChecks.findIndex(c => c.name === currentCheck) + 1) / defaultSecurityChecks.length * 100}%` 
                  }}
                />
              </div>
            </div>
          </Card>
        )}

        {/* Scan Results */}
        {scanResult && (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card className="p-6">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold mb-4 ${
                  scanResult.overallScore >= 80 ? 'bg-green-100 text-green-800' :
                  scanResult.overallScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {scanResult.overallScore}
                </div>
                <h3 className="text-2xl font-bold text-ethos-navy mb-2">
                  Security Score
                </h3>
                <p className="text-ethos-gray mb-4">
                  {scanResult.passedChecks} of {scanResult.totalChecks} checks passed
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{scanResult.passedChecks}</div>
                    <div className="text-sm text-ethos-gray">Passed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">{scanResult.warningChecks}</div>
                    <div className="text-sm text-ethos-gray">Warnings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">{scanResult.failedChecks}</div>
                    <div className="text-sm text-ethos-gray">Failed</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Detailed Results */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-ethos-navy mb-6">
                Detailed Security Assessment
              </h3>
              <div className="space-y-4">
                {scanResult.checks.map((check) => (
                  <div key={check.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(check.category)}
                        <h4 className="font-semibold text-ethos-navy">{check.name}</h4>
                        <Badge className={getSeverityColor(check.severity)}>
                          {check.severity.toUpperCase()}
                        </Badge>
                      </div>
                      {getStatusIcon(check.status)}
                    </div>
                    <p className="text-sm text-ethos-gray mb-2">{check.description}</p>
                    {check.status === 'failed' && check.recommendation && (
                      <div className="bg-red-50 border border-red-200 rounded p-3 mt-2">
                        <p className="text-sm text-red-800">
                          <strong>Recommendation:</strong> {check.recommendation}
                        </p>
                      </div>
                    )}
                    {check.status === 'warning' && check.recommendation && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-2">
                        <p className="text-sm text-yellow-800">
                          <strong>Recommendation:</strong> {check.recommendation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Email Capture Modal */}
            {showEmailCapture && (
              <Card className="p-6 border-2 border-ethos-purple">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-ethos-purple mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-ethos-navy mb-2">
                    Get Your Detailed Security Report
                  </h3>
                  <p className="text-ethos-gray mb-6">
                    Enter your email to receive a comprehensive security report with actionable recommendations.
                  </p>
                  <div className="max-w-md mx-auto space-y-4">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethos-purple focus:border-ethos-purple"
                    />
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleEmailSubmit}
                        disabled={!email}
                        className="flex-1 bg-ethos-purple hover:bg-ethos-purple/90"
                      >
                        Get Detailed Report
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowEmailCapture(false)}
                      >
                        Skip
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* New Scan Button */}
            <div className="text-center">
              <Button
                onClick={() => {
                  setScanResult(null);
                  setWebsiteUrl('');
                  setShowEmailCapture(false);
                  setEmail('');
                }}
                variant="outline"
                className="border-ethos-purple text-ethos-purple hover:bg-ethos-purple hover:text-white"
              >
                Scan Another Website
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
