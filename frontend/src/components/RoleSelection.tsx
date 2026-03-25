'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, MapPin, Activity, Lock, ChevronRight } from 'lucide-react';

interface RoleSelectionProps {
    onSelectRole: (role: string) => void;
}

const ROLES = [
    {
        id: 'Citizen',
        title: 'Citizen',
        description: 'PUBLIC ADVISORY & VISUAL RISK',
        icon: Users,
        color: 'emerald'
    },
    {
        id: 'Ward Officer',
        title: 'Ward Officer',
        description: 'LOCAL ZONE COMMAND',
        icon: MapPin,
        color: 'yellow'
    },
    {
        id: 'City Admin',
        title: 'City Admin',
        description: 'DELHI WIDE OPTIMIZATION',
        icon: Activity,
        color: 'orange'
    },
    {
        id: 'System Admin',
        title: 'System Admin',
        description: 'FULL THRESHOLD CONTROL',
        icon: Lock,
        color: 'rose'
    }
];

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
    const colorMap: Record<string, string> = {
        emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/40',
        yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400 group-hover:border-yellow-500/40',
        orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:border-orange-500/40',
        rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400 group-hover:border-rose-500/40',
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-xl relative"
            >
                <div className="bg-[#0f172a]/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative Ring */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl opacity-50" />
                    
                    <div className="text-center mb-10 relative">
                        <motion.div
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 p-0.5 mb-6 shadow-xl shadow-blue-500/5"
                        >
                            <Shield className="w-8 h-8 text-blue-500" />
                        </motion.div>
                        <h1 className="text-4xl font-black text-white tracking-tight uppercase">Aurora Secure Access</h1>
                        <p className="text-blue-400/60 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">Restricted Government Operations Check</p>
                    </div>

                    <div className="space-y-4 relative">
                        {ROLES.map((role, idx) => {
                            const Icon = role.icon;
                            return (
                                <motion.button
                                    key={role.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => onSelectRole(role.id)}
                                    className="group w-full flex items-center justify-between p-5 rounded-2xl border bg-white/[0.02] border-white/5 hover:bg-white/[0.05] transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${colorMap[role.color]}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wide">{role.title}</h3>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{role.description}</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                </motion.button>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center relative">
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">
                            System Security Notice
                        </p>
                        <div className="flex justify-center gap-6 mt-4 opacity-40">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 " />
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 " />
                             <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 " />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
