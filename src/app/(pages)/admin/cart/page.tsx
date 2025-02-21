"use client"
import Step1 from '@/app/shared/components/form/step1';
import Step2 from '@/app/shared/components/form/step2';
import Step3 from '@/app/shared/components/form/step3';
import Stepper from '@/app/shared/components/form/Stepper';
import { createProfile } from '@/app/shared/services/superbase.service';
import { useProfileStore } from '@/app/store/profile.store';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterPage = () => {
    const [step, setStep] = useState<number>(1);
    const [error, setError] = useState<boolean>(false);
    const { getProfile } = useProfileStore((state) => state);
    const router = useRouter();

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = async () => {
        const { data, error } = await createProfile(getProfile());
        if (data) {
            router.push('/');
        }
    };

    const steps = ['Step 1', 'Step 2', 'Step 3'];

    return (
        <>
            <div className="mx-auto h-screen flex items-center justify-center">
                <div className="shadow-lg p-5 rounded-[20px] my-auto w-[80vw] h-[70vh]">
                    <Stepper steps={steps} currentStep={step - 1} />
                    {step === 1 && <Step1 error={error} setError={setError} />}
                    {step === 2 && <Step2 />}
                    {step === 3 && <Step3 />}
                    <div className="flex justify-between mt-4">
                        {step !== 1 && <Button onClick={prevStep}>Back</Button>}
                        {step !== 3 && error && <Button onClick={nextStep}>Next</Button>}
                        {step === 3 && <Button onClick={handleSubmit}>Submit</Button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;