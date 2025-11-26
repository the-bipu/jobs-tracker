import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb';
import { Job } from '@/models/job';

interface Context {
  params: { id: string }
}

export async function GET(
  request: NextRequest,
  context: Context
) {
  const { id } = context.params;
  try {
    await connectMongo();
    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  context: Context
) {
  const { id } = context.params;
  try {
    await connectMongo();
    const data = await request.json();
    const job = await Job.findByIdAndUpdate(id, data, { new: true });

    if (!job) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: Context
) {
  const { id } = context.params;
  try {
    await connectMongo();
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job deleted' }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}