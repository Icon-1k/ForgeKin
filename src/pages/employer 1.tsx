import { useState, useRef, useEffect } from "react";
import Header from '../components/Header';
import CenterCard from '../components/CenterCard';
import Employer1Card from '../components/cards/Employer1Card';
import { useNavigate } from 'react-router-dom';

// Color constants
const accent = "#FFBB2E";
const primaryText = "#232323";
const mutedText = "#9B9B9B";
function CustomSelect({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; placeholder?: string }) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function onDoc(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
		}
		document.addEventListener('mousedown', onDoc);
		return () => document.removeEventListener('mousedown', onDoc);
	}, []);

	return (
		<div ref={ref} style={{ position: 'relative' }}>
			<div
				tabIndex={0}
				onClick={() => setOpen(s => !s)}
				style={{
					width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #E6E6E6', background: '#fff', cursor: 'pointer'
				}}
			>
				{options.find(o => o.value === value)?.label || placeholder || 'Select'}
			</div>
			{open && (
				<div style={{ position: 'absolute', top: '110%', left: 0, right: 0, background: '#fff', border: '1px solid #E6E6E6', borderRadius: 8, zIndex: 40, boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}>
					{options.map(o => (
						<div key={o.value} onClick={() => { onChange(o.value); setOpen(false); }} style={{ padding: '10px 12px', cursor: 'pointer' }}>{o.label}</div>
					))}
				</div>
			)}
		</div>
	);
}

function ExampleAvatar() {
	return (
		<div style={{ position: 'absolute', right: 48, top: 140, display: 'flex', gap: -8 }}>
			<div style={{ width: 36, height: 36, borderRadius: '50%', background: '#825AF8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>A</div>
			<div style={{ width: 36, height: 36, borderRadius: '50%', background: '#16C87F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>M</div>
		</div>
	);
}

export default function ForgeKinEmployerSignupDropdown() {
	const [fullName, setFullName] = useState("");
	const [bizType, setBizType] = useState("");
	const navigate = useNavigate();

	const bizTypeOptions = [
		{ value: 'startup', label: 'Startup' },
		{ value: 'sme', label: 'SME' },
		{ value: 'corporation', label: 'Corporation' },
	];

	return (
		<div style={{ fontFamily: 'Inter, sans-serif', background: '#F7F8F9', minHeight: '100vh' }}>
			<Header />

			<CenterCard
				variant="employer"
				maxWidth={560}
				margin={'54px auto'}
				padding={'32px'}
				borderRadius={12}
				boxShadow={'0 6px 20px rgba(0,0,0,0.04)'}
				employerContent={<Employer1Card />}
			/>

			<footer style={{ marginTop: 40, padding: '24px 0', textAlign: 'center', color: mutedText }}>
				© 2024 SkillHive. All rights reserved.
			</footer>
		</div>
	);
}

