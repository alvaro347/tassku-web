import { RefreshCcw, FolderKanban } from 'lucide-react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import { FeatureShowcase } from '../components/FeatureShowcase'
import {
    SyncDevicesMockup,
    EncryptionMockup,
    OfflineQueueMockup,
    ProjectTreeMockup,
    LabelsMockup,
    CalendarMockup,
} from '../components/FeatureShowcase/ShowcaseMockups'
import DownloadCta from '../components/DownloadCta/DownloadCta'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <FeatureShowcase
                id="sync"
                icon={<RefreshCcw size={16} />}
                label="Cross-platform Sync"
                title="Your data, everywhere"
                description="Seamless sync across every device. Your workflow follows you."
                items={[
                    {
                        title: 'Real-time sync',
                        description: 'Changes appear instantly on all your devices — desktop, phone, and tablet stay perfectly in sync.',
                        mockup: <SyncDevicesMockup />,
                    },
                    {
                        title: 'End-to-end encryption',
                        description: 'Your data is encrypted before it leaves your device. Only you can read it.',
                        mockup: <EncryptionMockup />,
                    },
                    {
                        title: 'Offline support',
                        description: 'Keep working without a connection. Changes queue up and sync automatically when you\'re back online.',
                        mockup: <OfflineQueueMockup />,
                    },
                ]}
            />
            <FeatureShowcase
                id="organization"
                icon={<FolderKanban size={16} />}
                label="Smart Organization"
                title="Projects that work your way"
                description="Structure your work however it makes sense to you."
                items={[
                    {
                        title: 'Nested projects',
                        description: 'Break large projects into sub-projects. Keep everything organized without losing the big picture.',
                        mockup: <ProjectTreeMockup />,
                    },
                    {
                        title: 'Labels & priorities',
                        description: 'Tag tasks with custom labels and set priority levels. Filter to find exactly what you need.',
                        mockup: <LabelsMockup />,
                    },
                    {
                        title: 'Due dates & calendar',
                        description: 'Set deadlines, view your schedule at a glance, and never miss what matters.',
                        mockup: <CalendarMockup />,
                    },
                ]}
                reverse
            />
            <DownloadCta />
            <Footer />
        </>
    )
}

export default Home
