import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ApplicationModal = ({ scheme, isOpen, onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      fatherName: '',
      dateOfBirth: '',
      gender: '',
      category: '',
      mobileNumber: '',
      email: '',
      aadharNumber: ''
    },
    farmDetails: {
      landSize: '',
      landType: '',
      cropType: '',
      irrigationType: '',
      farmLocation: '',
      surveyNumber: ''
    },
    documents: {
      aadharCard: null,
      landRecords: null,
      bankPassbook: null,
      incomeProof: null,
      categoryProof: null
    }
  });

  const totalSteps = 4;

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev?.[section],
        [field]: value
      }
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev?.documents,
        [field]: file
      }
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                required
                value={formData?.personalInfo?.name}
                onChange={(e) => handleInputChange('personalInfo', 'name', e?.target?.value)}
                placeholder="Enter your full name"
              />
              <Input
                label="Father's Name"
                type="text"
                required
                value={formData?.personalInfo?.fatherName}
                onChange={(e) => handleInputChange('personalInfo', 'fatherName', e?.target?.value)}
                placeholder="Enter father's name"
              />
              <Input
                label="Date of Birth"
                type="date"
                required
                value={formData?.personalInfo?.dateOfBirth}
                onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e?.target?.value)}
              />
              <Input
                label="Mobile Number"
                type="tel"
                required
                value={formData?.personalInfo?.mobileNumber}
                onChange={(e) => handleInputChange('personalInfo', 'mobileNumber', e?.target?.value)}
                placeholder="Enter 10-digit mobile number"
              />
              <Input
                label="Email Address"
                type="email"
                value={formData?.personalInfo?.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e?.target?.value)}
                placeholder="Enter email address"
              />
              <Input
                label="Aadhar Number"
                type="text"
                required
                value={formData?.personalInfo?.aadharNumber}
                onChange={(e) => handleInputChange('personalInfo', 'aadharNumber', e?.target?.value)}
                placeholder="Enter 12-digit Aadhar number"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Farm Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Land Size (in acres)"
                type="number"
                required
                value={formData?.farmDetails?.landSize}
                onChange={(e) => handleInputChange('farmDetails', 'landSize', e?.target?.value)}
                placeholder="Enter land size"
              />
              <Input
                label="Crop Type"
                type="text"
                required
                value={formData?.farmDetails?.cropType}
                onChange={(e) => handleInputChange('farmDetails', 'cropType', e?.target?.value)}
                placeholder="Enter main crop type"
              />
              <Input
                label="Farm Location"
                type="text"
                required
                value={formData?.farmDetails?.farmLocation}
                onChange={(e) => handleInputChange('farmDetails', 'farmLocation', e?.target?.value)}
                placeholder="Village, District, State"
              />
              <Input
                label="Survey Number"
                type="text"
                required
                value={formData?.farmDetails?.surveyNumber}
                onChange={(e) => handleInputChange('farmDetails', 'surveyNumber', e?.target?.value)}
                placeholder="Enter survey/plot number"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Document Upload</h3>
            <div className="space-y-4">
              {[
                { key: 'aadharCard', label: 'Aadhar Card', required: true },
                { key: 'landRecords', label: 'Land Records/Revenue Records', required: true },
                { key: 'bankPassbook', label: 'Bank Passbook', required: true },
                { key: 'incomeProof', label: 'Income Certificate', required: false },
                { key: 'categoryProof', label: 'Category Certificate (if applicable)', required: false }
              ]?.map((doc) => (
                <div key={doc?.key} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-primary">
                      {doc?.label} {doc?.required && <span className="text-red-500">*</span>}
                    </label>
                    {formData?.documents?.[doc?.key] && (
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                    )}
                  </div>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(doc?.key, e?.target?.files?.[0])}
                    className="mb-2"
                  />
                  <p className="text-xs text-text-secondary">
                    Accepted formats: PDF, JPG, PNG (Max size: 2MB)
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Review & Submit</h3>
            {/* Application Summary */}
            <div className="bg-surface p-4 rounded-lg">
              <h4 className="font-medium text-text-primary mb-3">Application Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Scheme:</span>
                  <span className="text-text-primary font-medium">{scheme?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Applicant:</span>
                  <span className="text-text-primary">{formData?.personalInfo?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Land Size:</span>
                  <span className="text-text-primary">{formData?.farmDetails?.landSize} acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Crop Type:</span>
                  <span className="text-text-primary">{formData?.farmDetails?.cropType}</span>
                </div>
              </div>
            </div>
            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">Important Notice</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Ensure all information provided is accurate and complete</li>
                    <li>• Keep your application reference number safe for tracking</li>
                    <li>• You will receive SMS/email updates on application status</li>
                    <li>• Processing time: {scheme?.processingTime || '15-30 days'}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Declaration */}
            <div className="border border-border p-4 rounded-lg">
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm text-text-secondary">
                  I hereby declare that all the information provided above is true and correct to the best of my knowledge. 
                  I understand that any false information may lead to rejection of my application.
                </span>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-heading font-semibold text-text-primary">
              Apply for {scheme?.name}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSteps }, (_, index) => (
              <React.Fragment key={index}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  index + 1 <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1 <= currentStep ? (
                    index + 1 < currentStep ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      index + 1
                    )
                  ) : (
                    index + 1
                  )}
                </div>
                {index < totalSteps - 1 && (
                  <div className={`flex-1 h-1 rounded ${
                    index + 1 < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous
          </Button>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={onClose}
            >
              Cancel
            </Button>
            {currentStep < totalSteps ? (
              <Button
                variant="default"
                onClick={handleNext}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={handleSubmit}
                iconName="Send"
                iconPosition="right"
              >
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;